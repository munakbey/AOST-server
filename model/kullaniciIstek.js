const mongoose = require('mongoose');

var kullaniciIstekSchema = new mongoose.Schema({
    plaka: String,
    camId_1: Number,
    camId_2: Number,
    mesafe: String
});

var KullaniciIstek=mongoose.model('KullaniciIstek', kullaniciIstekSchema);
module.exports=KullaniciIstek;