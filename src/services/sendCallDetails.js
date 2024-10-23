const mongoose = require('mongoose');
const CallDetails = require('../models/CallDetails')


const sendCallDetails = async (request, response) => {

    try {
        const { SNO, senderId,
            recieverId, roomId,
            senderName, receiverName,
            duration, status,
            startTime, endTime } = request.body;
        console.log(request.body)

        if (!request.body) {
            return response.status(400).json({ message: "body is required...." })
        }
        else {
            // console.log(CallDetails.find().countDocuments())
            const callDetails = new CallDetails({
                SNO: 1,
                senderId: senderId,
                recieverId: recieverId,
                roomId: roomId,
                senderName: senderName,
                receiverName: receiverName,
                duration: duration,
                status: status,
                startTime: startTime,
                endTime: endTime
            })
            await callDetails.save();
            return response.status(201).json({ message: "callDetails successfully saved" })
        }
    }
    catch (error) {
        return response.status(404).json({ message: error.message })
    }
}

const getCallDetails = async (request, response) => {
    try {
        const { status, receiverName } = request.body;
        if (!request.body) {
            return response.status(404).json({ error: 'invalid request body' })
        }
        else {
            const callData = await CallDetails.find({ status: status, receiverName: receiverName })
            return response.status(200).json({ callDetails: callData })
        }
    }
    catch (error) {
        return response.status(404).json({ error: error.message })

    }


}

const updateCallDetails = async (request, response) => {

    try {
        const { status, duration, nickname } = request.body
        if (!status || !duration || !nickname) {
            return response.status(404).json({ message: 'invalid body' })
        }
        else {
            const filter = { senderName: nickname }
            console.log(status, duration, nickname)

            const updateQuery = {
                $set: { status: status, duration: duration }

            }

            const info = await CallDetails.updateOne(filter, updateQuery)
            return response.status(201).json({ message: 'successfully updated', info: info })

        }
    }
    catch (error) {
        return response.status(404).json({ message: error.message })
    }

}



module.exports = { sendCallDetails, getCallDetails, updateCallDetails };





