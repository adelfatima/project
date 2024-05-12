const express=require('express');
const router=express.Router();

const findProductByImageId=require("../controller/product/getproductbyImageId");

  //get product by image_id
  router.get('/findProductByImageId', async (req, res) => {
     const imageId = "660f76d777194d901458205d"; 
     try {
       const product = await findProductByImageId(imageId);
       res.json(product);
     } catch (error) {
       console.error('Error:', error.message);
       res.status(500).send('Server error');
     }
   });
module.exports=router;