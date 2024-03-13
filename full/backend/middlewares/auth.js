const jwt = require('jsonwebtoken');
const ErrorHandler = require("../utils/ErrorHandler");
const {catchError} =  require("./catchError")
exports.isAuthenticated  = catchError(async(req, res, next)=>{
  const {token}  = req.cookies;

  if(!token){
    return next(new ErrorHandler("please login in to access the resource"), 401)
  }

  const {id} = jwt.verify(token, process.env.JWT_SECRET)
  res.json({id ,  token})
 })
 