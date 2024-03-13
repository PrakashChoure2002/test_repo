
exports.sendToken = (Users, statuscode, res) => {
  const token = Users.getjwttoken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 
    ),
    httpOnly: true
  };

  res.status(statuscode).cookie("token", token, options).json({success: true , id: Users._id, token});

  // res.json({ token });
};
