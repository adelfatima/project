const express=require('express');
const router=express.Router();

const { addDeliveryMan, getDeliveryMan } = require('../controller/DeliveryMan/index');

router.post("/AddDeliveryMan", addDeliveryMan);
router.get("/GetDeliveryMan", getDeliveryMan);


module.exports=router;