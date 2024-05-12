
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    
    name: {
        type: String,
        // required : true
    },
    userName: {
        type: String,
        // required : true
    },
    
    email: {
        type: String,
        // required : true
    },
    password: {
        type: String,
        // required : true
    },
    magazineId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'magazine',
        // required : false
    },
    identificationId: {
        type: Number,
        // required : true
    },
    nationality: {
        type: String,
        // required : true
    },
    location: {
       type:String
    },
    dateOfBirth: {
        type: Date,
        // required : true
    }
});

// Define a pre-save hook to auto-increment the id field
adminSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestAdmin = await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestAdmin ? highestAdmin.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;