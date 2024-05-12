const express=require('express');
const router=express.Router();
const { addOperation, getOperation } = require("../controller/operation/index");


router.post('/Addoperation', addOperation);
router.get('/Getoperation', getOperation);
module.exports=router;