const mongoose = require('mongoose');
const Product = require('../../models/product');
const Image = require('../../models/image');

const AddProductAndImage = () => {
    // Create a new product instance
    const newProduct = new Product({
        name: 'Productandimage1',
        production_Date: new Date('2005-01-02'), // Assuming these are dates, convert to Date objects
        Expiry_Date: new Date('2007-01-02'),
        purshace_price: 120,
        selling_price: 180,
        expense: 100,
    });

    let savedProductId; // Variable to store the ID of the saved product

    // Save the product
    newProduct.save()
        .then(savedProduct => {
            console.log('Product saved:', savedProduct);
            savedProductId = savedProduct._id; // Save the ID of the saved product

            // Create an image instance
            const newImage = new Image({
                url: ['http://example.com/imagefortheseproduct1.jpg', 'http://example.com/imagefortheseproduct1.jpg','http://example.com/imagefortheseproduct1.jpg'],
                product_id: savedProductId, // Assign the product's id to the image
            });

            // Save the image
            return newImage.save();
        })
        .then(savedImage => {
            console.log('Image saved:', savedImage);

            // Update the product with the image ID
            return Product.findByIdAndUpdate(savedProductId, { image_id: savedImage._id }, { new: true });
        })
        .then(updatedProduct => {
            console.log('Product updated with image ID:', updatedProduct);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

module.exports = { AddProductAndImage };