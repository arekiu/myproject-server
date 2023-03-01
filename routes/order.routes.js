const router = require("express").Router();
 
//const mongoose = require("mongoose");
 
const Order = require("../models/Order.model");
const Service = require("../models/Service.model");
const User = require("../models/User.model") 
 
//  POST /api/projects  -  Creates a new project
router.post("/orders", (req, res, next) => {
  const { total, user_id, order_items, date } = req.body;
 
  Project.create({ total, user_id, order_items: [], date })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});


 
module.exports = router;