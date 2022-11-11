const express = require('express');
const router = express.Router();
const Event = require('../models/Events')

router.get('/', async (req, res) => {
    console.log('Returning Events');
    const events = await Event.find();
    res.json(events)
})

router.post('/addEvent', async(req, res) => {
    const newEvent = new Event(
        req.body
    );
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
})



module.exports = router