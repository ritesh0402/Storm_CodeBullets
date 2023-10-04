const express = require('express');
const {create_user,userLogIn, userEventRegistration} = require('../controllers/user_controller');
const { createEvent,getAllEvents,getEventsByUser, deleteEvent} = require('../controllers/event_controllers');
const {fetchuser} = require('../middleware/fetchuser');

const router = express.Router();



router.post('/signup', create_user);
router.post('/login', userLogIn);
router.post('/userEventRegistration', fetchuser, userEventRegistration);

router.post('/createEvent', fetchuser, createEvent)
router.get('/getAllEvents',getAllEvents);
router.get('/getEventsByUser',fetchuser,getEventsByUser);
router.post('/deleteEvent', fetchuser, deleteEvent);

module.exports = router;