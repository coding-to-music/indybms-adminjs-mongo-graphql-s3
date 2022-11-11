const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const uri = "mongodb+srv://uppalas:2HSSSNNpL3gWMHqc@eventmanager.k4vjk3w.mongodb.net/BookMyEvent?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log("MongoDB connected")
}).catch(err => console.log(err))

app.use(bodyParser.json());

// routes
const EventsRoute = require('./routes/Events');
const UsersRoute = require('./routes/Users');
app.use('/events', EventsRoute);
app.use('/users', UsersRoute);

// start server
app.listen(3000, () => {
    console.log("Listening at port 3000");
})