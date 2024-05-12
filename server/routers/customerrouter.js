const express=require('express');
const router=express.Router();
const { addCustomer, getCustomer } = require('../controller/customer/index');



router.post('/Addcustomers', addCustomer);
router.get('/Getcustomers', getCustomer);
module.exports=router;