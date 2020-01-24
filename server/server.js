
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const giphyRouter = require(`./routes/giphy.router`); 
const addGifRouter = require('./routes/addGif.router');
const scoreRouter = require(`./routes/score.router`);
const userGifRouter = require(`./routes/userGif.router`);

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use(`/api/giphy`, giphyRouter); //giphy api
app.use(`/api/addGif`, addGifRouter); // admin routes (get, put, post, delete)
app.use(`/api/score`, scoreRouter); 
app.use(`/api/userGif`, userGifRouter); // user routes

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
