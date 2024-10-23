const mongoose = require('mongoose');
const callDetails = new mongoose.Schema(
    {
        SNO: { type: Number, require: false },
        senderId: { type: String, require: false },
        recieverId: { type: String, require: false },
        roomId: { type: String, require: false },
        senderName: { type: String, require: false },
        receiverName: { type: String, require: false },
        duration: { type:String, require: false },
        status: { type: String, default: 'pending', require: false },
        startTime: { type:Date, require: false },
        endTime: { type:Date, require: false }
    }
); 
const CallDetails=mongoose.model("callDetails",callDetails)   
module.exports=CallDetails;                   