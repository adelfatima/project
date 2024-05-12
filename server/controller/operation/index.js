const Operation = require('../../models/operation');
 // Optional for temporary storage

const addOperation = async (req, res) => {
//   
try {
     
     // Extract data from request body
        const {
        
     id,
     operation
     
     

    } = req.body;

    // Create new admin object, potentially including imageUrl
    const newOperation = new Operation({
     id,
     operation
     
     
     
    });

     // Save the document to the database
     await newOperation.save();
    
     // Send a success response
     res.status(201).json({ message: 'Example data inserted successfully', insertedData: newOperation});
 } catch (error) {
     // If an error occurs, send an error response
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
 }
};
const getOperation = async (req,res)=>{
     try{
          const operations = await Operation.find();
          res.status(201).json({message :"found",operations})
     }catch(error){
          res.status(500).json({message : error.message});
     }
     
}

module.exports = {addOperation,getOperation};