const express = require('express');
const mongoose = require('mongoose');
var KullaniciIstek=mongoose.model("KullaniciIstek")

var router = express.Router();

router.get('/list', (req, res) => {
    KullaniciIstek.find((err, data) => {
        res.json(data);
       console.log(data)
    }
).sort({time: -1});
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
        hız: req.body.hız,
        mesafe: req.body.mesafe,
        lat1: req.body.lat1,
        long1: req.body.long1,
        lat2: req.body.lat2,
        long2: req.body.long2,
        adres: req.body.adres,
        adres2: req.body.adres2,
        tarih: req.body.tarih,
    }).save().then(() => {
        res.json("Kaydetme İşlemi Başarılı."+req.body.plate);
    }).catch((err) => {
        res.json("Kaydetme İşleminde Hata Oluştu.");
    });
});
module.exports = router;