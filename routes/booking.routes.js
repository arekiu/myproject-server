const router = require("express").Router();
const Booking = require("../models/Booking.model");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");


//  POST /api/booking  -  Creates a new booking


    router.post("/booking", (req, res, next) => {
        const {orderItems, selectedDate,selectedTimeSlot, userId} = req.body
        console.log( userId)
        Booking.create({orderItems, selectedDate,selectedTimeSlot})
        .then(newBooking => {
            console.log("EL USEEEEEEEEERRRRR:",User.findById(userId))
           return User.findByIdAndUpdate(userId, {$push: {booking: newBooking._id}}, {new: true})
        })
        .then(response => console.log("LA RESPONSEEEEEEEEEE",response))
        .catch(err => res.json(err));
    });



    module.exports = router;