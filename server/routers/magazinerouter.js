const express=require('express');
const router=express.Router();
const { addMagazine, getMagazine } = require("../controller/magazine/index");


router.post('/Addmagazine', addMagazine);
router.get('/Getmagazine', getMagazine);
module.exports=router;