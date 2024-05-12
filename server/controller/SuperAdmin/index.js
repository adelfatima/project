const SuperAdmin = require('../../models/SuperAdmin');
 // Optional for temporary storage

const addSuperAdmin = async (req, res) => {
//   
try {
     
     // Extract data from request body
        const {
        
     id,
     userName,
     password
     

    } = req.body;

    // Create new admin object, potentially including imageUrl
    const newSuperAdmin = new SuperAdmin({
     id,
     userName,
     password
     
     
     
    });

     // Save the document to the database
     await newSuperAdmin.save();
    
     // Send a success response
     res.status(201).json({ message: 'Example data inserted successfully', insertedData: newSuperAdmin });
 } catch (error) {
     // If an error occurs, send an error response
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
 }
};
const getSuperAdmin = async (req,res)=>{
     try{
          const superadmins = await SuperAdmin.find();
          res.status(201).json({message :"found",superadmins})
     }catch(error){
          res.status(500).json({message : error.message});
     }
     
}

module.exports = {addSuperAdmin,getSuperAdmin};

     