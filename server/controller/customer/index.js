const Customer = require('../../models/customer');
 // Optional for temporary storage

const addCustomer = async (req, res) => {
//   
try {
     
     // Extract data from request body
        const {
        
     id,
     first_name,
     last_name,
     payment_id,
     telephone_number,
     location
     

    } = req.body;

    // Create new admin object, potentially including imageUrl
    const newCustomer = new Customer({
     id,
     first_name,
     last_name,
      payment_id,
     telephone_number,
     location
     
     
     
    });

     // Save the document to the database
     await newCustomer.save();
    
     // Send a success response
     res.status(201).json({ message: 'Example data inserted successfully', insertedData: newCustomer });
 } catch (error) {
     // If an error occurs, send an error response
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
 }
};
const getCustomer = async (req,res)=>{
     try{
          const customers = await Customer.find();
          res.status(201).json({message :"found",customers})
     }catch(error){
          res.status(500).json({message : error.message});
     }
     
}
module.exports = { addCustomer, getCustomer };


     