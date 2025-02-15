const pool = require('../database/connection.js')
const razorpay = require('../config/razorPayConfig.js')

const createOrder = async(req,res)=>{
    const {amount, currency} = req.body;
    if(!amount || !currency)
    {
        res.status(400).json({ message:" Amount and currency are required " });
    }
    try{
        const order = await razorpay.orders.create({
            amount : amount,
            currency: currency,
            receipt:`orders ${date.now()}`
        })
        res.status(200).json(order);
    }catch(error)
    {
        console.log(error);
        console.error("Error log for create orders : ", error.message);

    }
}