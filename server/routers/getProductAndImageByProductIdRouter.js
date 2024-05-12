const express=require('express');
const router=express.Router();
const getProductAndImageByProductId=require("../controller/product/getproduct&image");

router.get('/getProductAndImageByProductId',async(req,res)=>{

     getProductAndImageByProductId('66357972adc752029927e8bb')
.then(result => {
console.log(result.product);
console.log(result.image);
})
.catch(error => {
console.error(error);
});
   })


module.exports=router;