const Product = require("../../models/product");
const addProduct = async (req, res) => {

     try {
          
          // Extract data from request body
             const {
            id, 
           name,
           image_id,
           production_Date,
           Expiry_Date,
           purshace_price,
           selling_price ,
           expense
           
         } = req.body;
     
         // Create new admin object, potentially including imageUrl
         const newProduct = new Product({
          id, 
           name,
           image_id,
           production_Date,
           Expiry_Date,
           purshace_price,
           selling_price ,
           expense
         });
     
          // Save the document to the database
          await newProduct.save();
         
          // Send a success response
         res.status(201).json({ message: 'Example data inserted successfully', insertedData: newProduct });
     //     res.send(newProduct);
     //     console.log(newProduct);
      } catch (error) {
          // If an error occurs, send an error response
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
      }
     };
     const getProduct = async (req,res)=>{
          try{
               const products = await Product.find();
               res.status(201).json({message :"found",products})
          }catch(error){
               res.status(500).json({message : error.message});
          }
          
     }
    
     module.exports = {addProduct,getProduct};
     
    
