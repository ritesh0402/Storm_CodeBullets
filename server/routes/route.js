const express = require('express');
const {create_user,userLogIn} = require('../controllers/user_controller');
const { createEvent,getAllEvents,getEventsByUser} = require('../controllers/event_controllers');
const {fetchuser} = require('../middleware/fetchuser');

const router = express.Router();



router.post('/signup', create_user);
router.post('/login', userLogIn);

router.post('/createEvent', fetchuser, createEvent)
router.get('/getAllEvents',getAllEvents);
router.get('/getEventsByUser',fetchuser,getEventsByUser);

module.exports = router;