const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = require('../Models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()


router.get('/users', async(req, res) => {

    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.send("Error: " + err)
    }

})

router.get('/validateUsers/:emailId', async(req, res) => {

    const emailId = req.params.emailId
    console.log(emailId)

    try {
        const user = await User.findOne({ emailId })

        if (user.userType == "tourist") {
            res.json({ "status": "ok", "userType": "tourist" })
        } else if (user.userType == "hotel_manager") {
            res.json({ "status": "ok", "userType": "hotel_manager" })
        } else if (user.userType == "cab_owner") {
            res.json({ "status": "ok", "userType": "cab_owner" })
        } else {
            res.json({ "status": "error", "userType": "NOT FOUND" })
        }
    } catch (err) {
        res.send("Error: " + err)
    }



})

router.post('/users', async(req, res) => {

    const user = new User({
        emailId: req.body.emailId,
        password: req.body.password,
        userType: req.body.userType,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber,
        address: req.body.address
    })
    const { emailId, password: plainTextPassword, userType, firstName, lastName, mobileNumber, address } = req.body

    const password = await bcrypt.hash(req.body.password, 10)

    try {
        const u1 = await User.create({ emailId, password, userType, firstName, lastName, mobileNumber, address })
        res.json({ "status": "ok" })
        res.json(response)

    } catch (error) {
        if (error.code == 11000) {
            res.json({ status: 'error', error: 'Username is already in use' })
        } else {
            res.send("Error: " + error)
        }
    }
})


router.post("/login", async(req, res) => {

    const { emailId, password } = req.body
    const user = await User.findOne({ emailId })

    if (!user) {
        return res.json({ status: "error", error: "Invalid Username/Password" })
    }

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({
            id: user._id,
            emailId: user.emailId,
            userType: user.userType
        }, process.env.ACCESS_TOKEN_SECRET)
        return res.json({ status: "ok", firstName: user.firstName, userType: user.userType, data: token })
    } else {
        res.json({ status: "wrong", error: "Wrong Password" })
    }


})

router.post("/saveHotelDetailToken", async(req, res) => {
    const { hotelName, hotelLocation, hotelFacilities, hotelRoomRate, hotelRoomsAvailable, hotelClass, hotelDescription, hotelImage0, hotelImage1, hotelImage2, hotelImage3 } = req.body

    const token = jwt.sign({
            hotelName: hotelName,
            hotelLocation: hotelLocation,
            hotelFacilities: hotelFacilities,
            hotelRoomRate: hotelRoomRate,
            hotelRoomsAvailable: hotelRoomsAvailable,
            hotelClass: hotelClass,
            hotelDescription: hotelDescription,
            hotelImage0: hotelImage0,
            hotelImage1: hotelImage1,
            hotelImage2: hotelImage2,
            hotelImage3: hotelImage3
        }, process.env.ACCESS_TOKEN_SECRET)
        //console.log(token)

    return res.json({ status: "ok", data: token })

})

module.exports = router