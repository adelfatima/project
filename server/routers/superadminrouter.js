const express=require('express');
const router=express.Router();
const { addSuperAdmin, getSuperAdmin } = require("../controller/SuperAdmin/index");


router.post('/AddSuperAdmin', addSuperAdmin);
router.get('/GetSuperAdmin', getSuperAdmin);
module.exports=router;