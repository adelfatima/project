const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    first_name: {
        type: String,
        // required : true
    },
    last_name: {
        type: String,
        // required : true
    },
    payment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment',
        // required : false
    },
    telephone_number: {
     type: String,
     // required : true
 },
 location: {
    type: String,
    // required : true
},
    
});

// Define a pre-save hook to auto-increment the id field
customerSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestCustomer = await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestCustomer ? highestCustomer.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const Customer= mongoose.model('Customer', customerSchema);

module.exports = Customer;