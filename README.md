# KeyHunt: A Real Estate Platform

KeyHunt is a dynamic and user-friendly platform for both real estate agents and people looking for properties. This application provides a platform for searching, sorting, and managing properties for rent or sale. Agents can manage their properties, and users can see additional details of a property and save their favorites. 

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation Guide](#installation-guide)

## Features

- **Search properties**: Search properties for rent and sale by price, region (zip code), and type.
- **Sort properties**: Sort properties from new to old.
- **View property details**: View property details. Additional details available for logged-in users.
- **User registration and login**: Users can register and log in.
- **Favorites**: Favorite properties can be added, viewed, and managed.
- **User profile editing**: Users can edit their profiles.

### Real Estate Agent Features

- **Dashboard**: Manage properties (CRUD operations).
- **Contact messages**: View and mark messages as read.
- **Manage agents**: Add users as real estate agents attached to the same office.
- **Customize office**: Customize real estate office information.

### Admin Features

- **Manage properties**: Manage all properties (CRUD operations).
- **Manage categories**: Manage categories (e.g. house, garage, apartment, etc.).
- **Manage offices and users**: Manage real estate offices and users, and link a user to a real estate office.

## Technology Stack

- **React**: Front-end framework.
- **Cypress**: Used for testing.
- **Mapbox**: Used for a feature on the landing page.

## Installation Guide

To get the app running locally:

```bash
# Clone this repository
git clone https://github.com/your_username_/KeyHunt.git

# Go into the repository
cd KeyHunt

# Install dependencies in the `app` and `api` folders
cd app
npm install

cd ../api
npm install

# Run the app and API servers
cd ../app
npm run start

cd ../api
npm run start
```
Now, KeyHunt should be running in your browser at localhost:3000.
## Notes
This app utilizes a JSON list of municipalities for mapping functionality. This list can be found [here](https://raw.githubusercontent.com/jief/zipcode-belgium/master/zipcode-belgium.json).

This project uses React with Create React App, react-router for routing, and Mapbox.
