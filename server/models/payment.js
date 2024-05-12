const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
  
    payment_method: {
        type: String
      
        // required : false
    },
    payment_password:{
         type:String
    },
    customerID: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'customer',
     // required : false
 },
    
});

// Define a pre-save hook to auto-increment the id field
PaymentSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestPayment= await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestPayment ? highestPayment.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const payment = mongoose.model('payment', PaymentSchema);

module.exports = payment;