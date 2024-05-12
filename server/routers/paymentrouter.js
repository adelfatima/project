const express=require('express');
const router=express.Router();
const { addPayment, getPayment } = require("../controller/payment/index");


router.post('/Addpayment', addPayment);
router.get('/Getpayment', getPayment);
module.exports=router;