const express=require('express');
const router=express.Router();
const { addAdmin, getAdmin,deleteAdmin } = require('../controller/admin/index');

router.post('/Addadmins', addAdmin)

router.get('/GetAdmins', getAdmin);

router.delete('/deleteAdmin/:ID',deleteAdmin);

module.exports=router;
