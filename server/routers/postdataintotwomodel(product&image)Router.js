
const express = require('express');
const router = express.Router();
const { AddProductAndImage } = require("../controller/product/postdataintotwomodel(product&image).js");

router.post('/AddproductandImage', (req, res) => {
    // Call the AddProductAndImage function when the route is hit
    AddProductAndImage(req, res);
});

module.exports = router;