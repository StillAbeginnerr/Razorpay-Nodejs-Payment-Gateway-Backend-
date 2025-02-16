const pool = require('../database/connection.js')
const razorpay = require('../config/razorPayConfig.js')

const CreateOrder = async(req,res)=>{
    const {amount, currency} = req.body;
    if(!amount || !currency)
    {
        res.status(400).json({ message:" Amount and currency are required " });
    }
    try{
        const order = await razorpay.orders.create({
            amount : amount,
            currency: currency,
            receipt:`orders ${Date.now()}`,
            notes : {
                key1 : "Order creation"
            }
        })
        res.status(200).json(order);
    }catch(error)
    {
        console.error("Error creating orders:", error);
        res.status(500).json({ message:"Internal server error" });
    }
}

module.exports.CreateOrder = CreateOrder;