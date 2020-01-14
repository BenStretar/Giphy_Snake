
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR(80) UNIQUE NOT NULL,
"password" VARCHAR(1000) NOT NULL,
"admin" BOOLEAN DEFAULT FALSE
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