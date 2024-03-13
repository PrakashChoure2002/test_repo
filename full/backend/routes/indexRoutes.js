const express  = require('express');
const { homepage ,usersignout, usersignup, usersignin } = require('../controllers/indexController');
const router = express.Router();
const {isAuthenticated} = require("../middlewares/auth")

router.get('/',isAuthenticated , homepage)

// post /user/singup
router.post('/user/signup', usersignup)

// post /user/singup
router.post('/user/signin', usersignin)

// /user/singOut
router.get('/user/signout', usersignout)



module.exports = router; 