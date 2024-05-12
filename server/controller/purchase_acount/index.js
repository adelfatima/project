const Acount = require('../../models/purchase_acount');
 // Optional for temporary storage

const addAccount = async (req, res) => {
try {
     
     // Extract data from request body
        const {
        
      id,
      name,
      balane,
      admin_id,
      payment_id,
      statistics_id,
      invoice_id
    } = req.body;

    // Create new admin object, potentially including imageUrl
    const newAcount = new Acount({
     
     
     id,
     name,
     balane,
     admin_id,
     payment_id,
     statistics_id,
     invoice_id
    });

     // Save the document to the database
     await newAcount.save();
    
     // Send a success response
     res.status(201).json({ message: 'Example data inserted successfully', insertedData: newAcount });
 } catch (error) {
     // If an error occurs, send an error response
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
 }
};
const getAccount = async (req,res)=>{
     try{
          const acounts = await Acount.find();
          res.status(201).json({message :"found",acounts})
     }catch(error){
          res.status(500).json({message : error.message});
     }
     
}
module.exports = {addAccount,getAccount};
