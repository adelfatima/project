const DeliveryMan= require('../../models/DeliveryMan');
 // Optional for temporary storage

const addDeliveryMan = async (req, res) => {
//   
try {
     
     // Extract data from request body
        const {
        
     id,
     name,
     email,
     phoneNumber,
     admin_id,
     magazine_id,
     CitiesAndVilleges,
     deliveryOrderId,
     review_id,
     customer_location_id
     

    } = req.body;

    // Create new admin object, potentially including imageUrl
    const newDeliveryMan = new DeliveryMan({
    
     id,
     name,
     email,
     phoneNumber,
     admin_id,
     magazine_id,
     CitiesAndVilleges,
     deliveryOrderId,
     review_id,
     customer_location_id
     
     
    });

     // Save the document to the database
     await newDeliveryMan.save();
    
     // Send a success response
     res.status(201).json({ message: 'Example data inserted successfully', insertedData: newDeliveryMan });
 } catch (error) {
     // If an error occurs, send an error response
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
 }
};
const getDeliveryMan = async (req,res)=>{
     try{
          const man = await DeliveryMan.find();
          res.status(201).json({message :"found",man})
     }catch(error){
          res.status(500).json({message : error.message});
     }
     
}

module.exports={addDeliveryMan,getDeliveryMan}