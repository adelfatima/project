
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
  
    url: [{
        type: String,
        // required : true
    }],
   product_id: {type:mongoose.Schema.Types.ObjectId,
     required : false,
     ref:'product'
    }
});

//Define a pre-save hook to auto-increment the id field
imageSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestImage= await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestImage ? highestImage.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const image = mongoose.model('image', imageSchema);

module.exports = image;