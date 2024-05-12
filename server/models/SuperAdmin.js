
const mongoose = require('mongoose');

const SuperAdminSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
  
    userName: {
        type: String,
        // required : true
    },
    password: {
        type: String,
        // required : false
    },
    
});

// Define a pre-save hook to auto-increment the id field
SuperAdminSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestSuper= await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestSuper ? highestSuper.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const SuperAdmin = mongoose.model('SuperAdmin', SuperAdminSchema);

module.exports = SuperAdmin;