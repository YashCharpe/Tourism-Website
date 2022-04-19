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
        return res.json({ status: "ok", firstName: user.firstName })
    } else {
        res.json({ status: "wrong", error: "Wrong Password" })
    }


})

module.exports = router