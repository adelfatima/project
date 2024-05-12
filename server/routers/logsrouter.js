const express=require('express');
const router=express.Router();
const { addLogs, getlogs } = require("../controller/logs/index");

router.post('/Addlogs', addLogs);
router.get('/Getlogs', getlogs);

module.exports=router;