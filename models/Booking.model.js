const { Schema, model } = require("mongoose");


const bookingSchema = new Schema(
    {
        
            selectedDate: { type: Date },
            selectedTimeSlot: { type: String },
        
        order_items: [{
            name: { type: String },
            price: { type: Number }
        }],
    },
    {
        timestamps: true,
    }
    );

const Booking = model("Booking", bookingSchema);

module.exports = Booking;