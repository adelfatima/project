const mongoose = require('mongoose');

const PurchaseAcountSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        // required : true
    },
    balance: {
        type: String,
        // required : true
    },
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        // required : false
    },
    payment_id: {
     type: mongoose.Schema.Types.ObjectId,
        ref: 'payment',
     // required : true
 },
 statistics_id: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'statistic'
},
invoice_id:{
     type:Array
}
    
});

// Define a pre-save hook to auto-increment the id field
PurchaseAcountSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestAcount = await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestAcount ? highestAcount.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const Acount= mongoose.model('Acount', PurchaseAcountSchema);

module.exports = Acount;