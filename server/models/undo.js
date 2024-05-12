const mongoose = require('mongoose');


const undoSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
  log_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'logs',
  },
    operation_id: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'operation',
    },
    
    admin_id: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'admin',    },
    customer_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'customer',
    },
    product_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'product',
    },
    magazine_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'magazine',
    },
    superadmin_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'SuperAdmin',
    },
    purchase_acount_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'purchase_acount',
    },
    invoice_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'invoice',
    },
    location_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'location',
    },
    backup_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'backup',
    },
    DeliveryMan_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'DeliveryMan.',
    },
    undo_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'undo',
    },
    deliveryOrder:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'DeliveryOrder',
    },



    
});

// Define a pre-save hook to auto-increment the id field
undoSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestundo= await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestundo ? highestundo.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const undo = mongoose.model('undo', undoSchema);

module.exports = undo;