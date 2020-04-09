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

module.exports = router;