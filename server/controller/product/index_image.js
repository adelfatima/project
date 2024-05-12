
const image = require('../../models/image');
const Product = require('../../models/product');
const addImage = async (req, res) => {

     try {
          
          // Extract data from request body
             const {
            id, 
           url,
           product_id
         } = req.body;
     
         // Create new admin object, potentially including imageUrl
         const newImage = new Image({
          id, 
           url,
           product_id
         });
     
          // Save the document to the database
          await newImage.save();
         
          // Send a success response
         res.status(201).json({ message: 'Example data inserted successfully', insertedData: newImage });
     //     res.send(newProduct);
     //     console.log(newProduct);
      } catch (error) {
          // If an error occurs, send an error response
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
      }
     };
     const getImage = async (req,res)=>{
          try{
               const images = await image.find();
               res.status(201).json({message :"found",images})
          }catch(error){
               res.status(500).json({message : error.message});
          }
          
     }
    
 module.exports = {addImage,getImage};
     
    
