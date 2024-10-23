const userprofilecontroller=require('../controllers/userprofilecontroller')
const express=require('express');
const app=express();
const multer = require('multer');
const upload = multer();
app.post("/sendprofiledetails",userprofilecontroller.saveprofileDetails);
app.post("/getprofiledetails",userprofilecontroller.getprofileDetails)
app.post("/senddevicedetails",upload.none(),userprofilecontroller.sendDeviceDetails)

module.exports=app;