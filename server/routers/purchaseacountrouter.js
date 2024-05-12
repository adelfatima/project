
const express=require('express');
const router=express.Router();
const { addAccount, getAccount } = require("../controller/purchase_acount/index");

router.post('/Addaccount', addAccount);
router.get('/Getaccount', getAccount);
module.exports=router;