
const express = require('express')
const router = express.Router()


import { postMeeting, teamsHandler, meetingsHandler, meetingsAllHandler } from '../hendlers/index'

router.get('/meetings/:id', meetingsHandler)

router.get('/meetingsall', meetingsAllHandler)


router.get('/teams', teamsHandler)



router.post('/postMeeting', postMeeting)


export default router;

