const router = require("express").Router();
    
const mongoose = require("mongoose");
    
const Product = require("../models/Product.model");

    
    //  POST /api/projects  -  Creates a new project
    router.post("/products", (req, res, next) => {
    const { name, description, price, image } = req.body;
    
    Product.create({ name, description, price, image})
        .then(response => res.json(response))
        .catch(err => res.json(err));
    });
    
module.exports = router;