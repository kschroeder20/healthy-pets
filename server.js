// const express = require("express");

// const mongoose = require("mongoose");
// // const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // set up view engine
// app.set('view engine', 'ejs');

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// //Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/healthypets", { useNewUrlParser: true });

// // Start the API server
// app.listen(PORT, function () {
//     console.log(`API Server now listening on PORT ${PORT}!`)
// });


const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./models');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 3001;
// Route requires
const user = require('./routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

// Sessions
app.use(
    session({
        secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
        store: new MongoStore({ mongooseConnection: dbConnection }),
        resave: false, //required
        saveUninitialized: false //required
    })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', user)

// Starting Server 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})