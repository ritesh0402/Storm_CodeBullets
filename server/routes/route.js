const express = require('express');
const {create_user,userLogIn} = require('../controllers/user_controller');
const { createEvent } = require('../controllers/event_controllers');
const {fetchuser} = require('../middleware/fetchuser');

const router = express.Router();



router.post('/signup', create_user);
router.post('/login', userLogIn);
router.post('/createEvent', fetchuser, createEvent)

module.exports = router;