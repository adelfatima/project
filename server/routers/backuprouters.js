const express=require('express');
const router=express.Router();
const { addbackups, getbackups } = require('../controller/backup/index');


router.post('/Addbackups', addbackups);
router.get('/Getbackups', getbackups);
module.exports=router;