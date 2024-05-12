const Location = require('../../models/location');
 // Optional for temporary storage

const addLocation= async (req, res) => {
//   
try {
     
     // Extract data from request body
        const {
        
     id,
  name,
  description,
  delievry_order_id,
  langitude,
  latitude,
  log_id,
  undo_id,
  backup_id,
  statistics_id
    } = req.body;

    // Create new admin object, potentially including imageUrl
    const newLocation = new Location({
     id,
     name,
     description,
     delievry_order_id,
     langitude,
     latitude,
     log_id,
     undo_id,
     backup_id,
     statistics_id
     
     
     
    });

     // Save the document to the database
     await newLocation.save();
    
     // Send a success response
     res.status(201).json({ message: 'Example data inserted successfully', insertedData: newLocation });
 } catch (error) {
     // If an error occurs, send an error response
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
 }
};
const getLocation = async (req,res)=>{
     try{
          const Locations = await Location.find();
          res.status(201).json({message :"found",Locations})
     }catch(error){
          res.status(500).json({message : error.message});
     }
     
}
module.exports={addLocation,getLocation}

     