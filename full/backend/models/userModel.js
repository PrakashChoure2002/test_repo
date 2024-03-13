const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "First name  should have required"],
    },

    contact: {
      type: Number,
      unique:[true,] ,
      required: [true, "Contact  required  "],
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      select: false,
    },

    isAdmin: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function(){
if(!this.isModified("password")){
  return
}
  let salt = bcrypt.genSaltSync(10)
  this.password = bcrypt.hashSync(this.password, salt)

})

// password compare
UserSchema.methods.comparepassword = function(password){
  return bcrypt.compareSync(password, this.password)
};

// token genreted
UserSchema.methods.getjwttoken = function(){
  return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRE
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
