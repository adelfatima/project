const express=require('express');
const router=express.Router();
const SuperAdmin = require('../models/SuperAdmin');
const targetId = '66103f46a0cfc16731a68f51';



router.get('/deletesuperAdmin', async (req, res) => {
    try {
        const updatedDoc = await SuperAdmin.findByIdAndDelete(
            { _id: targetId }, // Filter to target the document with the specified _id
         // Use $unset to remove the field, replace 'fieldNameToDelete' with the actual field name
            { new: true } // To return the updated document
        );
        console.log('Field deleted successfully:', updatedDoc);
        res.send('Field deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred');
    }
});
module.exports=router;