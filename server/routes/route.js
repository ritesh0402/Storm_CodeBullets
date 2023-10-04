const express = require('express');
const {create_user,userLogIn} = require('../controllers/user_controller');

const router = express.Router();



router.post('/signup', create_user);
router.post('/login', userLogIn);

module.exports = router;