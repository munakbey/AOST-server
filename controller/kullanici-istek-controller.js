const express = require('express');
const mongoose = require('mongoose');
var KullaniciIstek=mongoose.model("KullaniciIstek")

var router = express.Router();

router.get('/list', (req, res) => {
    KullaniciIstek.find((err, data) => {
        res.json(data);
       console.log(data)
    }
);
});

router.put("/:id", async (request, response) => {
    try {
        var person = await KullaniciIstek.findById(request.params.id).exec();
        person.set(request.body);
        var result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/", function(req, res, next){
 
    KullaniciIstek({
        plaka: req.body.plaka,
        camId_1: req.body.camId_1,
        camId_2: req.body.camId_2,
        mesafe: req.body.mesafe,
    }).save().then(() => {
        res.json("Kaydetme İşlemi Başarılı."+req.body.plate);
    }).catch((err) => {
        res.json("Kaydetme İşleminde Hata Oluştu.");
    });
});

module.exports = router;