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

        // PUT  /api/editservices/:serviceId  -  Updates a specific service by id
router.put("/editservices/:serviceId", (req, res, next) => {
  const { serviceId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Service.findByIdAndUpdate(serviceId, req.body, { new: true })
    .then((updatedService) => res.json(updatedService))
    .catch((error) => res.json(error));
});

// DELETE  /api/editservices/:serviceId  -  Deletes a specific service by id
router.delete("/editservices/:serviceId", (req, res, next) => {
  const { serviceId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  ServiceWorkerContainer.findByIdAndRemove(serviceId)
    .then(() =>
      res.json({
        message: `Service with ${serviceId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

router.get("/editservices",isAuthenticated, (req, res, next) => {
  Service.find()
      .then(allServices => res.json(allServices))
      .catch(err => res.json(err));
  });

  router.get("/editservices/:serviceId", (req, res, next) => {
    const { serviceId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(serviceId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    // Each Project document has `tasks` array holding `_id`s of Task documents
    // We use .populate() method to get swap the `_id`s for the actual Task documents
    Service.findById(serviceId)
      .then((service) => res.status(200).json(service))
      .catch((error) => res.json(error));
  });

  // PUT  /api/editservices/:serviceId  -  Updates a specific project by id
router.put("/editservices/:serviceId", (req, res, next) => {
  const { serviceId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Service.findByIdAndUpdate(serviceId, req.body, { new: true })
    .then((updatedService) => res.json(updatedService))
    .catch((error) => res.json(error));
});


// DELETE  /api/services/:serviceId  -  Deletes a specific project by id
router.delete("/editservices/:serviceId", (req, res, next) => {
  const { serviceId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Service.findByIdAndRemove(serviceId)
    .then(() =>
      res.json({
        message: `Service with ${serviceId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});


module.exports = router;