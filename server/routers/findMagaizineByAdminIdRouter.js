const express=require('express');
const router=express.Router();
const findMagazineByAdminId=require("../controller/magazine/findByAdminId");


//get magazine by admin_id
router.get('/findMagaizineByAdminId', async (req, res) => {
     const adminId = "660c1fa51f65703e15150562"; // Assuming admin_id is a string
     try {
       const magazine = await findMagazineByAdminId(adminId);
       res.json(magazine);
     } catch (error) {
       console.error('Error:', error.message);
       res.status(500).send('Server error');
     }
 });


module.exports=router;