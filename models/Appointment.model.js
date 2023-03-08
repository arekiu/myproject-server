const { Schema, model } = require("mongoose");


const appointmentSchema = new Schema(
    {
        unavailable: [{
            selectedDate: { type: Date },
            selectedTimeSlot: { type: String },
        }]
    },
    {
        timestamps: true,
    }
    );

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;


