const calldetailsroutes=require('../controllers/calldetailscontroller');
const express=require('express');
const app=express();
app.post("/sendcalldetails",calldetailsroutes.sendCallDetails)
app.post("/getcalldetails",calldetailsroutes.getCallDetails)
app.post("/updatecalldetails",calldetailsroutes.updateCallDetails)

module.exports=app;