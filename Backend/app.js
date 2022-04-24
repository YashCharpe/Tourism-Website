const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute')
const hotelRouter = require('./routes/hotelRoute')


const url = 'mongodb://localhost/TravelDatabase'

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

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

app.use('/', userRouter)
app.use('/', hotelRouter)


app.listen(9000, () => {
    console.log("Server Started at Port 9000")
})