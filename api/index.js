import "dotenv/config";

import express from "express";
import { ObjectId } from "mongodb";
import { initClient } from "./db/mongo.js";
import { registerMiddleware } from "./middleware/index.js";

// create an Express app
const app = express();

// set the port for the server to listen on
const port = 3003;

// register middleware
registerMiddleware(app);

// initialize MongoDB client and database
const client = await initClient();
const db = client.db();

// define a route to handle user login
app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // check if user exists in the database
  let user = await db.collection("users").findOne({ username, password });

  // if not, add user to the database
  if (!user) {
    await db.collection("users").insertOne({ username, password });
    user = await db.collection("users").findOne({ username, password });
  }

  // send back the user object
  res.json(user);
});

// define a router for authenticated routes
const authRouter = express.Router();

// middleware for authentication
authRouter.use(async (req, res, next) => {
  // check if authorization header exists
  if (req.headers.authorization) {
    // check if user with id exists
    const user = await db
      .collection("users")
      .findOne({ _id: ObjectId(req.headers.authorization) });
    // if user exists, pass user object to the request object
    if (user) {
      req.user = user;
      return next();
    }
  }
  // if user not authenticated, send back 401 error
  res.status(401).json({
    error: "Unauthorized",
  });
});

// define a route to get all properties
authRouter.get("/search", async (req, res) => {
  console.log(req.user);
  const properties = await db.collection("properties").find().toArray();
  res.json(properties);
});
authRouter.get("/properties", async (req, res) => {
  console.log(req.user);
  const properties = await db.collection("properties").find().toArray();
  res.json(properties);
});

// define a route to add a new property
authRouter.post("/properties", async (req, res) => {
  const property = {
    image:
      "https://picsum.photos/200/300",
    ...req.body,
  };


  await db.collection("properties").insertOne(property);

  // return added property
  res.json(property);
});

// define a route to get a property by id
authRouter.get("/properties/:id", async (req, res) => {
  const id = req.params.id;
  const property = await db.collection("properties").findOne({
    _id: ObjectId(id),
  });

  // if property exists, send back property object
  if (property) {
    res.json(property);
  } else {
    // if property not found, send back 404 error
    res.status(404).json({ error: "Not found" });
  }
});

// define a route to update a property by id
authRouter.patch("/properties/:id", async (req, res) => {
  const id = req.params.id;

  // check if property exists
  const property = await db
    .collection("properties")
    .findOne({ _id: ObjectId(id) });

  // if property exists, update property data
  if (property) {
    const { _id, ...data } = req.body;
    const newData = { ...property, ...data };
    await db.collection("properties").replaceOne({ _id: ObjectId(id) }, newData);

    res.json(newData);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// DELETE
authRouter.delete("/properties/:id", async (req, res) => {
  const id = req.params.id;

  await db.collection("properties").deleteOne({
    _id: ObjectId(id),
  });

  res.json({});
});

app.use(async (req, res, next) => {
  if (req.headers.authorization) {
    // check if user with id exists
    const user = await db
      .collection("users")
      .findOne({ _id: ObjectId(req.headers.authorization) });
    // exists? pass user to request
    console.log('test')
    if (user) {
      req.user = user;
      return next();
    }
  }
  res.status(401).json({
    error: "Unauthorized",
  });
}, authRouter);

app.listen(port, () => {
  console.log(`App listening http://localhost:${port}`);
});

// make sure database is closed when server crashes
const closeServer = () => {
  // default
  process.exit();
};

process.on("SIGINT", () => closeServer());
process.on("SIGTERM", () => closeServer());
//https://www.geeksforgeeks.org/node-js-process-signal-events/