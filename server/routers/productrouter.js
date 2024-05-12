const express=require('express');
const router=express.Router();
const { addProduct, getProduct } = require("../controller/product/index");

router.post('/Addproduct', addProduct);
router.get('/Getproduct', getProduct)

module.exports=router;