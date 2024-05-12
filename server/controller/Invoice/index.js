const Invoice = require('../../models/purchase_ invoice');
 // Optional for temporary storage

const addInvoice = async (req, res) => {
//   
try {
     
     // Extract data from request body
        const {
        
     id,
     customerID,
     ProductID,
     magazineID,
     DeliveryPrice,
     total,
   
     

    } = req.body;

    // Create new admin object, potentially including imageUrl
    const newInvoice = new Invoice({
     id,
     customerID,
     ProductID,
     magazineID,
     DeliveryPrice,
     total,
     
     
     
    });

     // Save the document to the database
     await newInvoice.save();
    
     // Send a success response
     res.status(201).json({ message: 'Example data inserted successfully', insertedData: newInvoice});
 } catch (error) {
     // If an error occurs, send an error response
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
 }
};
const getInvoice = async (req,res)=>{
     try{
          const invoices = await Invoice.find();
          res.status(201).json({message :"found",invoices})
     }catch(error){
          res.status(500).json({message : error.message});
     }
     
}
module.exports={addInvoice,getInvoice}