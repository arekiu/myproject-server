const express = require("express");
const router = express.Router();
    
const mongoose = require("mongoose");
    
const Service = require("../models/Service.model");

    
    //  POST /api/projects  -  Creates a new project
    router.post("/services", (req, res, next) => {
    const { name, description, price, image } = req.body;
    console.log(req.body)
    Service.create({ name, description, price, image})
        .then(response => res.json(response))
        .catch(err => res.json(err));
    });
    

    router.get("/services", (req, res, next) => {
        Service.find()
            .then(allServices => res.json(allServices))
            .catch(err => res.json(err));
        });

module.exports = router;