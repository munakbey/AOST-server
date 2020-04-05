const express = require('express');
const mongoose = require('mongoose');
var AracBilgi=mongoose.model("AracBilgi")
var Kamera=mongoose.model("Kamera")

var router = express.Router();

router.get('/', function (req, res) {
    res.send("dssddd");
})
/*
AracBilgi.find({},    { 
        "time" : 1.0
    },(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})
*/

router.get('/list', (req, res) => {
    AracBilgi.find((err, data) => {
        res.json(data);
       console.log(data)
    }
);
});

router.get('/list/:plate', (req, res) => {
    AracBilgi
    .find({plate: req.params.plate}, { 
        
    }, (err, doc) => {
        res.json(doc);
      console.log(doc+"---"+res);
    }).sort({time: -1});

});

router.get('/list/id/:camId', (req, res) => {
    AracBilgi
    .find({camId: req.params.camId}, { 
        
    }, (err, doc) => {
        res.json(doc);
      console.log(doc+"####"+res);
    }).sort({time: -1});

});



module.exports = router;