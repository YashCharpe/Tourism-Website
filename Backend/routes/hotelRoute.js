const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = require('../Models/user')
const HotelData = require('../Models/hotel')


router.get('/hotelDetails', async(req, res) => {
    try {
        const hotels = await HotelData.find()
        res.json(hotels)
    } catch (err) {
        res.send("Error: " + err)
    }
})

router.post("/hotelDetails", async(req, res) => {

    const hotel = new HotelData({
        emailId: req.body.emailId,
        hotelName: req.body.hotelName,
        location: req.body.location,
        facilities: req.body.facilities,
        description: req.body.description,
        hotelClass: req.body.hotelClass,
        roomsAvailable: req.body.roomsAvailable,
        roomRate: req.body.roomRate,
        hotelPhotos: req.body.hotelPhotos
    })

    try {
        const h1 = await hotel.save()
        res.json(h1)
    } catch (err) {
        res.send("Error: " + err)
    }
})

module.exports = router