const express=require('express');
const router=express.Router();
const SuperAdmin = require('../models/SuperAdmin');
//update
const targetIdToUpdate = '66104bec96f226db12b031ba'; // The specific _id you want to target

// Define the update operation
const update = {
    $set: {
        userName: "Batoul Hassan", // Replace 'fieldNameToUpdate' with the actual field name you want to update
    }
};

// Options to return the modified document after update
const options = { new: true };

// Execute the update operation
router.get('/updatesuperadmin', async (req, res) => {
    try {
        const updatedDoc = await SuperAdmin.findOneAndUpdate(
            { _id: targetIdToUpdate }, // Filter to target the document with the specified _id
            update, // Update operation
            options // Options
        );

        if (!updatedDoc) {
            console.log('No document found with the specified ID');
            res.status(404).send('No document found with the specified ID');
            return;
        }

        console.log('Field updated successfully:', updatedDoc);
        res.send('Field updated successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred');
    }
});
module.exports=router;