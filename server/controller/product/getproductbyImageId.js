const Product = require('../../models/product');


const findProductByImageId = async (imageId) => {
  try {
    const product = await Product.findOne({ image_id: imageId });
    if (!product) {
      throw new Error(`Product with image ID ${imageId} not found`);
    }
    return product;
  } catch (error) {
    console.error('Error while fetching product by image ID:', error.message);
    throw new Error('Error while fetching product by image ID');
  }
};

module.exports = findProductByImageId;
