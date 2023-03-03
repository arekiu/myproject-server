const router = require("express").Router();
 
//const mongoose = require("mongoose");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
 
const Order = require("../models/Order.model");
const Service = require("../models/Service.model");
const User = require("../models/User.model") 
 
//  POST CREATES ORDER

// router.post("/orders", (req, res, next) => {
//   const { total, user_id, order_items, date } = req.body;

//   User.findByIdAndUpdate(user, {$push: {order_items: service[0]}})
//   .then(updatedUser => {
//       console.log(updatedUser)
//       res.redirect("/")
//   })
// })


 
module.exports = router;