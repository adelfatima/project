const Product = require('../../models/product');; // Assuming the product model is in this file
const Image = require('../../models/image'); // Assuming the image model is in this file

// Fetch a product with its associated images
async function getProductAndImageByProductId(productId) {
     try {
       const product = await Product.findById(productId).exec();
       if (!product) {
         throw new Error(`No product found with ID ${productId}`);
       }
   
       const image = await Image.findOne({ product_id: productId }).exec();
   
       return { 
          product, image
      };
    
     } catch (error) {
       console.error(error);
       throw error;
     }
}
   module.exports = getProductAndImageByProductId;