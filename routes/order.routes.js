const router = require("express").Router();
const Appointment = require("../models/Appointment.model");
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

 

Appointment.findOne({})
  .then((appointment) => {
    if (!appointment) {
      // No appointment exists, so create a new one
      const newAppointment = new Appointment({ unavailable: [] });
      return newAppointment.save()
        .then((result) => {
          console.log("New appointment created:", result);
        })
        .catch((error) => {
          console.error("Error creating appointment:", error);
        });
    } else {
      // An appointment already exists, do nothing
      console.log("Appointment already exists:", appointment);
    }
  })
  .catch((error) => {
    console.error("Error finding appointments:", error);
  });


router.get("/order",isAuthenticated, (req, res, next) => {
    console.log("nada")
    });
    

    router.post("/appointment", (req, res, next) => {
        let appointmentId 
        const unavailable = req.body
        
        Appointment.findOne({})
        .then((appointment) => {
            
            appointmentId = appointment._id
            Appointment.findByIdAndUpdate(appointmentId, {$push: {"unavailable" : unavailable}},{ new: true })
            .then(updatedArray => {
                console.log(updatedArray)
            })
            .catch((err=> console.log(err)))
        })
        .catch((err=> console.log(err)))
       
    })

    router.get("/appointment",(req, res, next) => {


        Appointment.find()
            .then(appointments => res.json(appointments))
            .catch(err => res.json(err));
    })   



module.exports = router;