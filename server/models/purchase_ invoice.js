const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
  
    customerID: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'customer',
      required : false
     // i want name of customer and location
    },
    ProductID: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'product',
      required : false
     // i want product and price of each product
    },
    magazineID: {
     type: mongoose.Schema.Types.ObjectId,
        ref: 'magazine',
        required : false
        //not i want magazine name
    
 },
     DeliveryPrice: {
     type: Number,
      required : false
 },
 total: {
     type: Number,
     // required : false
 },

    
});

// Define a pre-save hook to auto-increment the id field
InvoiceSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestInvoice= await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestInvoice ? highestInvoice.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = Invoice;