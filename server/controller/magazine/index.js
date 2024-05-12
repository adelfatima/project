

const Magazine = require("../../models/magazine");
const addMagazine = async (req, res) => {
  
     try {
          
          // Extract data from request body
             const {
            id, 
           name,
           product_id,
           magazine_location ,
           telephone_number,
           admin_id
           
         } = req.body;
     
         // Create new admin object, potentially including imageUrl
         const newMagazine = new Magazine({
          id,
          name,
          product_id,
          magazine_location ,
          telephone_number,
          admin_id
         });
     
          // Save the document to the database
          
         await  newMagazine.save();
         console.log(newMagazine);
          // Send a success response
          res.status(201).json({ message: 'Example data inserted successfully', insertedData: newMagazine });
      } catch (error) {
          // If an error occurs, send an error response
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
      }
     };
     const getMagazine = async (req,res)=>{
          try{
               const magazines = await Magazine.find();
               res.status(201).json({message :"found",magazines})
          }catch(error){
               res.status(500).json({message : error.message});
          }
          
     }
    
     module.exports = {addMagazine,getMagazine}
     
          
     
