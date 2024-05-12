const DeliveryOrder = require('../../models/DeliveryOrder');
 // Optional for temporary storage

const addDeliveryOrder = async (req, res) => {
//   
try {
     
     // Extract data from request body
        const {
        
     id,
     name,
  description,
  magazine_id,
  customer_id,
  location_id,
  log_id,
  backup_id,
  undo_id,
  deliveyMan_id
    } = req.body;

    // Create new admin object, potentially including imageUrl
    const newDeliveryOrder = new DeliveryOrder({
     id,
     name,
     description,
     magazine_id,
     customer_id,
     location_id,
     log_id,
     backup_id,
     undo_id,
     deliveyMan_id
     
     
     
    });

     // Save the document to the database
     await newDeliveryOrder.save();
    
     // Send a success response
     res.status(201).json({ message: 'Example data inserted successfully', insertedData: newDeliveryOrder });
 } catch (error) {
     // If an error occurs, send an error response
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
 }
};
const getDeliveryOrder = async (req,res)=>{
     try{
          const DeliveryOrders = await DeliveryOrder.find();
          res.status(201).json({message :"found", DeliveryOrders})
     }catch(error){
          res.status(500).json({message : error.message});
     }
     
}

module.exports = { addDeliveryOrder, getDeliveryOrder};

     