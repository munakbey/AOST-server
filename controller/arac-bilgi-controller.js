const express = require('express');
const mongoose = require('mongoose');
var AracBilgi=mongoose.model("AracBilgi")
var Kamera=mongoose.model("Kamera")

var router = express.Router();
let mcount;
router.get('/', function (req, res) {
    res.send("dssddd");
})

router.get('/list', (req, res) => {
    AracBilgi.find((err, data) => {
        res.json(data);
       console.log(data)
    }
).sort({time: -1});;
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

router.post("/", function(req, res, next){ 
    AracBilgi
    .find({plate:req.body.plate,camId:req.body.camId}, { 
        
    }, (err, doc) => {
     
        console.log(doc+"####"+res);
        mcount=doc;

  if(mcount==0 ){
     
        AracBilgi({
            plate: req.body.plate,
            time: req.body.time,
            camId: req.body.camId,
        }).save().then(() => {
            res.json("Kaydetme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Kaydetme İşleminde Hata Oluştu.");
        });
  }else{
    res.json("Bu plaka daha önceden kayıt edilmiş");
  }
}).count();
});



router.get('/sil/:id', (req, res) => {
    AracBilgi.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            console.log('Silme basarili :');        }
        else { console.log('Silme hatası :' + err); }
    });
});
module.exports = router;