const mongoose = require('mongoose')

const hotelBookingSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    bookingDetails: [{
        hotelName: {
            type: String,
            required: true
        },
        checkInTime: {
            type: String,
            required: true
        },
        checkOutTime: {
            type: String,
            required: true
        },
        noofAdults: {
            type: String,
            required: true
        },
        noofChildren: {
            type: String,
            required: true
        },
        noofRooms: {
            type: String,
            required: true
        },
        hotelLocation: {
            type: String,
            required: true
        },
        paidAmount: {
            type: String,
            required: true
        }
    }]
})

module.exports = mongoose.model('BookingDetail', hotelBookingSchema)