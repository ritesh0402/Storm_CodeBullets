const express = require('express');
import {create_user,userLogIn} from '../controllers/user_controller'

const router = express.Router();



router.post('/signup', create_user);
router.post('/login', userLogIn);

export default router;