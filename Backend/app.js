const express = require('express');
const mongoose = require('mongoose');


const url = 'mongodb://localhost/TravelDatabase'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, PATCH');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection


con.on('open', (req, res) => {
    console.log("Connected!")
})


app.use(express.json())


app.listen(9000, () => {
    console.log("Server Started at Port 9000")
})