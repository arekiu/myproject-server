const router = require("express").Router();
 
//const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
 


 


router.get("/order",isAuthenticated, (req, res, next) => {
    console.log("nada")
    });



 
module.exports = router;