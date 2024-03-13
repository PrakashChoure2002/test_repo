const { catchError } = require("../middlewares/catchError")
const User = require('../models/userModel')
const ErrorHandler = require("../utils/ErrorHandler")
const { sendToken } = require("../utils/sendToken")

exports.homepage = catchError(async (req, res, next) => {
  res.json({ massage: 'homepage@!' })
})

exports.usersignup = catchError(async (req, res, next) => {
  const Users = await new User(req.body).save();
  //  res.status(201).json(Users)
  sendToken(Users, 201, res)
})

exports.usersignin = catchError(async (req, res, next) => {
  const user = await User.findOne({email:req.body.email}).select("+password")
  if(!user) return next (new ErrorHandler("user not found with this email address",404))
  const isMatch = user.comparepassword(req.body.password);
  if(!isMatch) return next(new ErrorHandler("wrong credential",500))
console.log(user);
res.json(user)
})

exports.usersignout = catchError(async (req, res, next) => {
  res.clearCookie("token");
  res.json({ message: 'Sucessfully signOut' })

})