import { Router } from "express";
import passport from "passport";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import { initClient } from "../db/mongo.js";
import { createUserData, hash } from "../middleware/auth/hash.js";

//Initialize MongoDB client and database:
const client = await initClient();
const db = client.db();

const registerRegularRoutes = (app) => {

    app.post("/login", (req, res, next) => {
        passport.authenticate("local", (err, user) => {
          if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
          }
          if (!user) {
            return res.status(401).json({ error: "No user found" });
          }
          if(user) {

              const givenPassword = hash(user, req.body.password)
              if(givenPassword !== user.password) {
                return res.status(401).json({ error: "Invalid username or password" });
              }
              
          }

          const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN_HOURS * 60 * 60 }
          );

          delete user.password
          delete user.salt
          delete user.saltParam
          return res.json({ token, ...user });
        })(req, res, next);
      });
      

    app.get("/properties", async (req, res) => {
        const properties = await db.collection("properties").find().toArray();
        res.json(properties);
      });
}

const registerAdminRoutes = (app) => {
    const adminRouter = Router();

    adminRouter.use(passport.authenticate("jwt", { session: false, failWithError: true }));

    adminRouter.post("/properties", async (req, res) => {
        const property = {
          image: "https://picsum.photos/200/300",
          ...req.body,
        };
      
        await db.collection("properties").insertOne(property);
      
        res.json(property);
      });
      
    adminRouter.patch("/properties/:id", async (req, res) => {
        const id = req.params.id;
        const property = await db.collection("properties").findOne({
          _id: new ObjectId(id),
        });


        if (property) {
          const { _id, ...data } = req.body;
          const newData = { ...property, ...data };
          await db.collection("properties").replaceOne(
            { _id: new ObjectId(id) },
            newData
          );
      
          res.json(newData);
        } else {
          res.status(404).json({ error: "Not found" });
        }
      });

    adminRouter.get("/properties/:id", async (req, res) => {
      const id = req.params.id;
      const property = await db.collection("properties").findOne({
        _id: new ObjectId(id),
      });

      if (property) {
        res.json(property);
      } else {
        res.status(404).json({ error: "Not found" });
      }
    });
      
    adminRouter.delete("/properties/:id", async (req, res) => {
        const id = req.params.id;
      
        await db.collection("properties").deleteOne({
          _id: new ObjectId(id),
        });
      
        res.json({});
      });

    app.use(adminRouter);

}


const registerRoutes = async (app) => {

    registerRegularRoutes(app)

    registerAdminRoutes(app)

    //// Custom error handler middleware to handle JWT authentication errors
    app.use((err, req, res, next) => {
        if (err.name === 'AuthenticationError') {
        res.status(401).json({ error: 'Token expired' });
        } else {
          console.log(err)
        res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}

export { registerRoutes };