const callDetails = require('../services/sendCallDetails')

function sendCallDetails(request, response) 
{
    callDetails.sendCallDetails(request, response)
}
function getCallDetails(request, response) {
    callDetails.getCallDetails(request, response);
}
function updateCallDetails(request,response)
{
callDetails.updateCallDetails(request,response)
}

module.exports = { sendCallDetails, getCallDetails,updateCallDetails }