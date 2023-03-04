const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
    
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");    
const Service = require("../models/Service.model");

    
    //  POST /ULPOAD THE IMAGE
    router.post("/upload", fileUploader.single("image"), (req, res, next) => {
 
        if (!req.file) {
          next(new Error("No file uploaded!"));
          return;
        }
        
        res.json({ image: req.file.path });
      });


    router.post("/services", (req, res, next) => {
        Service.create(req.body)
        .then(response => {
          res.status(201).json({message: "Service created"})
        })
        .catch(err => console.log(err))
    })
    

    router.get("/services",isAuthenticated, (req, res, next) => {
        Service.find()
            .then(allServices => res.json(allServices))
            .catch(err => res.json(err));
        });

module.exports = router;