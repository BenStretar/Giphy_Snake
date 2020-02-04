# Giphy_Snake
Eat food to increase the size of the snake. The food gathered also adds images to the users collection. 

This project was built using React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create the following tables:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "gifs" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(100),
    "url" VARCHAR(300)
);

CREATE TABLE "user_gifs" (
    "user_id" INT REFERENCES "user",
    "gifs_id" INT REFERENCES "gifs"
);

CREATE TABLE "game" (
    "id" SERIAL PRIMARY KEY,
    "time_elapsed" TIME,
    "gifs_collected" INT,
    "gifs_id" INT REFERENCES "gifs"
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    GIPHY_API_KEY=
    ```
    You'll have to generate your own Giphy API Key and paste it in the .env file. Sign in (or create an account) and create an app here to get a key: [https://developers.giphy.com/].

    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`


