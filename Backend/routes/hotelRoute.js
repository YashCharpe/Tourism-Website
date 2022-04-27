const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = require('../Models/user')
const HotelData = require('../Models/hotel')
const BookingDetail = require('../Models/hotelBooking')


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

router.post("/bookHotel", async(req, res) => {

    const bookdetail = new BookingDetail({
        emailId: req.body.emailId,
        bookingDetails: req.body.bookingDetails
    })
    try {
        const b1 = await bookdetail.save()
        res.json(b1)
    } catch (err) {
        res.json({ "error": "Error", "code": 11000 })
    }

})

router.patch("/bookHotelPatch", async(req, res) => {


    try {
        const h1 = await BookingDetail.findOneAndUpdate({ emailId: req.body.emailId }, { $push: { bookingDetails: req.body.bookingDetails } })
        res.json(h1)
    } catch (err) {
        res.send("Error: " + err)
    }

})


module.exports = router