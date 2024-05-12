const cloudinary = require("cloudinary").v2;
     const Image = require('./models/Image');     
cloudinary.config({ 
  cloud_name: 'free-lancer122', 
  api_key: '875949998744219', 
  api_secret: 'c-4Qz2ktoeVzvaVmt5w3ieAOYo4' 
});
const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
//setting up config file 
dotenv.config({path:'./config/config.env'});
const cors = require('cors');
app.use(cors());
// connecting to db
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode `)
});



  const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const cloudinary = require("../utils/cloudinary").v2;

// Load Image model
// const Image = mongoose.model("Image");

// @route   GET images/:id
// @desc    Get image by ID
// @access  Public
router.get("/:id", (req, res) => {
  Image.findById(req.params.id)
    .then((image) => {
      cloudinary.api.resource(image.cloudinary_id, (err, result) => {
        if (err) throw err;
        res.json(result.secure_url);
      });
    })
    .catch((err) => res.status(404).json({ nopostfound: "No Post Found" }));
});

app.get("/images",async (req, res) => {
    try{
        const images = await Image.find();
     // console.log(images);
      res.send(images);
    }catch(error){
        res.status(500).json({message : error.message})
    }
   
  });

  app.delete('/delete/:id',async (req,res)=>{
        try{
             await Image.findByIdAndDelete(req.params.id);
             res.status(200).json({message : `image having the id : ${req.params.id} deleted successfully`});
        }catch(error){
            res.status(500).json({message : error.message});
        }
  })
  app.delete('/delete-all',async (req,res)=>{
    try{
         await Image.deleteMany({});
         res.status(200).json({message :'all images has been deleted successfully'});
    }catch(error){
        res.status(500).json({message : error.message});
    }
});



// //////////////////////////////////
// upload to cloudinary
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log('result'); });

  const imagePublicId = 'your_image_public_id'; // Replace with the public ID of your image

cloudinary.api.resource("olympic_flag", (err, result) => {
  if (err) {
    console.error('Error getting image data: ', err);
  } else {
    console.log('Image data: ',result);
    
  }
});
// upload to mongo
app.post('/upload',async (req,res,result)=>{
    const image =   await Image.create({id:1});
      res.status(201).json({
          success : true,
          message : image
      })
  })
module.exports = router;