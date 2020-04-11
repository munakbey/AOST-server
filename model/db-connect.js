const mongoose = require('mongoose');
var AracBilgi=require("./aracBilgi")
var Kamera=require("./kamera")
mongoose.connect('mongodb+srv://munakbey:admin@cluster0-br351.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
    }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
/*
var arac1=new Kamera({
    camId: 12,
    lat: "854545445",
    long:"101222121"
})
arac1.save((error)=>{
    if(error){
        throw error;
    }
    console.log("saved!!!!!")
})*/

/*
Camera.find({},(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data)
})*/


require('./aracBilgi');
require('./kamera');
require('./kullaniciIstek');