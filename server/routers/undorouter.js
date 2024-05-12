const express=require('express');
const router=express.Router();
const { addundo, getundo } = require("../controller/undo/index");

router.post('/Addundo', addundo);
router.get('/Getundo', getundo);
module.exports=router;
