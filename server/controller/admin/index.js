const Admin = require('../../models/admin');
 // Optional for temporary storage

const addAdmin = async (req, res) => {
try {
     
     // Extract data from request body
        const {
        
      name,
      userName,
      email,
      password,
      magazineId,
      identificationId,
      nationality,
      location,
      dateOfBirth
    } = req.body;

    // Create new admin object, potentially including imageUrl
    const newAdmin = new Admin({
     
     
      name,
      userName,
      email,
      password,
      magazineId,
      identificationId,
      nationality,
      location,
      dateOfBirth
    });

     // Save the document to the database
     await newAdmin.save();
    
     // Send a success response
     res.status(201).json({ message: 'Example data inserted successfully', insertedData: newAdmin });
 } catch (error) {
     // If an error occurs, send an error response
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
 }
};
const getAdmin = async (req,res)=>{
     try{
          const admins = await Admin.find();
          res.status(201).json({message :"found",admins})
     }catch(error){
          res.status(500).json({message : error.message});
     }
     
}
const deleteAdmin = async (req, res) => {
     try {
       const { ID } = req.params; // Destructure ID from req.params
   
       // Check if the provided ID is valid
       if (!ID) {
         return res.status(400).json({ error: 'Invalid admin ID' });
       }
   
       // Find the admin by ID and delete it
       const result = await Admin.deleteOne({ _id: ID });
       if (result.deletedCount === 0) { // Check if any document was deleted
         return res.status(404).json({ error: 'Admin not found' });
       }
   
       res.json({ message: 'Admin deleted successfully' });
     } catch (error) {
       console.error(error);
       res.status(500).json({ error: 'Internal server error' });
     }
   };
 

// module.exports = addAdmin;
// module.exports = getAdmin;
module.exports = { addAdmin, getAdmin ,deleteAdmin};