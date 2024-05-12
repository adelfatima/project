const express=require('express');
const router=express.Router();
const { addInvoice, getInvoice } = require("../controller/Invoice/index");
router.post("/AddInvoice", addInvoice);
router.get("/GetInvoice", getInvoice);


module.exports=router;