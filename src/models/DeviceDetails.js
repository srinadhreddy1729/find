const mongoose=require('mongoose')
const deviceDetails=new mongoose.Schema(
    {
        identifier:{require:false,type:String},
        isVirtual:{require:false,type:String},
        manufacturer:{require:false,type:String},
        model:{require:false,type:String},
        operatingSystem:{require:false,type:String},
        osVersion:{require:false,type:String},
        platform:{require:false,type:String},
        webViewVersion:{require:false,type:String},
        value:{require:false,type:String},
        value:{require:false,type:String},
        batteryLevel:{require:false,type:String},
        isCharging:{require:false,type:String},
        taken:{require:false,type:String},
        userId:{require:false,type:Number,default:0}
    }
)
const deviceInfo=mongoose.model('deviceDetails',deviceDetails);
module.exports=deviceInfo;