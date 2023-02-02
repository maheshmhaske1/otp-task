const mongoose = require('mongoose')
const axios = require('axios')
const bcrypt = require('bcrypt')

require('dotenv').config()
const { OTP_SECRET } = process.env

const user = require('../model/user.model')


// -------------------- user sent otp -------------------- //
exports.sendOtp = async (req, res) => {
    const { mobile } = req.body

    axios.get(`https://2factor.in/API/V1/903598ba-a304-11ed-813b-0200cd936042/SMS/+91${mobile}/AUTOGEN`)
        .then((success) => {
            if (success.status == 200) {
                return res.json({
                    status: true,
                    message: `OTP Sent On ${mobile}`,
                })
            }
        })
        .catch((error) => {
            console.log(error)
            return res.json({
                status: false,
                message: `error while sending otp`,
            })
        })
}

// -------------------- user verifyOtp/refilter -------------------- //
exports.verifyOtp = async (req, res) => {
    const {  mobile, otp } = req.body


    const isValidOtp = await axios.get(`https://2factor.in/API/V1/903598ba-a304-11ed-813b-0200cd936042/SMS/VERIFY3/+91${mobile}/${otp}`)

    
    if (isValidOtp.data.Status == 'Success') {

        return res.json({
            status: true,
            message: `OTP Verified Successfully ....!`,
            data:[]
        })
        
    }else{
        return res.json({
            status: false,
            message: `Please Enter Correct OTP`,
            data:[]
        })

    }
   

}


