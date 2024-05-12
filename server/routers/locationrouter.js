const express=require('express');
const router=express.Router();
const { addLocation, getLocation } = require("../controller/location/index");
router.post('/Addlocation', addLocation);
router.get('/Getlocation', getLocation)


module.exports=router;