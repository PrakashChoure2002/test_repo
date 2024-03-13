require("dotenv").config({path: "./.env"})
const express = require('express');
const app = express();
const cors = require('cors')

// connectDatabase
require("./models/database").connectDatabase();

// logger
const logger = require('morgan');
app.use(logger("tiny"))

app.use(cors());

// body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// session and cookie
const  session = require("express-session");
const cookieparser = require("cookie-parser");

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.EXPRESS_SESSION_SECERT

}))

app.use(cookieparser());
//routes
app.use('/', require("./routes/indexRoutes"))




// golbal error
const ErrorHandler = require("./utils/errorHandler");
const { genetatedErrors } = require("./middlewares/errors");
const { connectDatabase } = require("./models/database");



app.all("*", (req,res,next) => {
  next(new ErrorHandler(`Url Not Found ${req.url}`), 404 )
});

app.use(genetatedErrors)

app.listen(process.env.PORT,
  console.log(`server runing port ${process.env.PORT} `)
  )