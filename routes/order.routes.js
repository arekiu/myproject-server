const router = require("express").Router();
 
//const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
 
const Order = require("../models/Order.model");

 


router.get("/order",isAuthenticated, (req, res, next) => {
    Order.find()
        .then(allServices => res.json(allServices))
        .catch(err => res.json(err));
    });



 
module.exports = router;