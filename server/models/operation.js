const mongoose = require('mongoose');

const OperationSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
  
    operation: {
        type: String,
        // required : true
    }
   
    
});

// Define a pre-save hook to auto-increment the id field
OperationSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestOperation= await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestOperation ? highestOperation.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const Operation = mongoose.model('Operation', OperationSchema);

module.exports = Operation;