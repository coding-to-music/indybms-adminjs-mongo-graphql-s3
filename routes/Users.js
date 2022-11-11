const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const ProblemDetails = require('../dto/ProblemDetails')

// Register User
router.post('/register', async(req, res) => {
    try{
        const user = await User.find({$or :[{username: req.body.username},{mobile: req.body.mobile}]});
        if(user.length > 0){
            console.log('User already exists!!');
            const problemDetails = new ProblemDetails(400, "User already exists", "Please login to avail the services!");
            res.json(problemDetails)
        }else{
            console.log('Registering User');
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.json(savedUser);
        }
    }catch(err){
        console.log('Exception Occurred: '+ err);
        const problemDetails = new ProblemDetails(err.errorCode, err.errmsg, err.errorDetail);
        res.json(problemDetails);
    }
});

// Login User
router.get('/login/:mobile', async(req, res) => {
    try{
        const user = await User.find({mobile: req.params.mobile});
        if(user.length > 0){
            console.log('User exists!!');
            res.json(user);
        }else{
            console.log('User doesn\'t exist!!');
            const problemDetails = new ProblemDetails(404, "User doesn't exist", "Please create an account to avail the services!");
            res.json(problemDetails);
        }
    }catch(err){
        console.log('Exception Occurred: '+ err);
        const problemDetails = new ProblemDetails(err.errorCode, err.errmsg, err.errorDetail);
        res.json(problemDetails);
    }
});

// Upgrade User by Username
router.patch('/upgrade/:username', async(req, res) => {
    try{
        console.log('Upgrading User!!');
        const user = await User.update({username: req.params.username}, {$set: {type: 'Organizer'}})
        res.json(user);
    }catch (err){
        console.log('Exception Occurred: '+ err);
        const problemDetails = new ProblemDetails(err.errorCode, err.errmsg, err.errorDetail);
        res.json(problemDetails);
    }
});

// Upgrade User by Mobile
router.patch('/upgrade/:mobile', async(req, res) => {
    try{
        console.log('Upgrading User!!');
        const user = await User.update({mobile: req.params.mobile}, {$set: {type: 'Organizer'}})
        res.json(user);
    }catch(err){
        console.log('Exception Occurred: '+ err);
        const problemDetails = new ProblemDetails(err.errorCode, err.errmsg, err.errorDetail);
        res.json(problemDetails);
    }
});

// Update User Information
router.patch('/update/:username', async(req, res) => {
    try{
        console.log('Updating User Information!!');
        const user = await User.update({username: req.params.username}, {$set: {mobile: req.body.mobile, latitude: req.body.latitude, longitude: req.body.longitude, type: req.body.type}})
        res.json(user);
    }catch(err){
        console.log('Exception Occurred: '+ err);
        const problemDetails = new ProblemDetails(err.errorCode, err.errmsg, err.errorDetail);
        res.json(problemDetails);
    }
});
module.exports = router