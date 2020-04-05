const express = require('express');
const mongoose = require('mongoose');
var AracBilgi=mongoose.model("AracBilgi")
var Kamera=mongoose.model("Kamera")

var router = express.Router();

router.get('/list', (req, res) => {
    Kamera.find((err, data) => {
        res.json(data);
       console.log(data)
    }
);
});

router.get('/list/id/:camId', (req, res) => {
    Kamera
    .find({camId: req.params.camId}, { 
        
    }, (err, doc) => {
        res.json(doc);
      console.log(doc+"####"+res);
    }).sort({time: -1});

});

module.exports = router;