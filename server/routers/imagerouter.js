
const express=require('express');
const router=express.Router();
const { addImage, getImage } = require("../controller/product/index_image");

router.post('/AddImage', addImage);
router.get('/getImage', getImage);
module.exports=router;