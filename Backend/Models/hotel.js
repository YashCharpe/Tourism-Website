const mongoose = require('mongoose');

const hotelDataSchema = new mongoose.Schema({

    emailId: {
        type: String,
        required: true,
        unique: true
    },
    hotelName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    facilities: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hotelClass: {
        type: String,
        required: true
    },
    roomsAvailable: {
        type: String,
        required: true
    },
    roomRate: {
        type: String,
        required: true
    },
    hotelPhotos: {
        type: Array,
        required: true
    }

})

module.exports = mongoose.model('HotelData', hotelDataSchema)