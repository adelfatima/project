const express=require('express');
const router=express.Router();
const { addDeliveryOrder, getDeliveryOrder } = require('../controller/delievryOrder/index');

router.post('/AddDeliveryOrder', addDeliveryOrder);
router.get('/GetDeliveryOrder', getDeliveryOrder);


module.exports=router;