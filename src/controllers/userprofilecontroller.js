const profileService=require('../services/profileService')
 function saveprofileDetails(request,response)
 {
    profileService.saveProfileDetails(request,response);
 }
function getprofileDetails(request,response)
{
    profileService.getProfileDetails(request,response)
}

function sendDeviceDetails(request,response)
{
profileService.sendDeviceDetails(request,response)
}

 module.exports={saveprofileDetails,getprofileDetails,sendDeviceDetails}