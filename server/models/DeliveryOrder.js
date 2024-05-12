const mongoose = require('mongoose');
const DeliveryMan = require('./DeliveryMan');

const DeliveryOrderSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
  name:{
    type:String
  },
    description: {
        type: String,
        // required : true
    },
    magazine_id: {
        type: String,
        // required : false
    },
    customer_id:{
     type:mongoose.Schema.Types.ObjectId,
        required : false,
        ref:'customer'
    },
    location_id:{
     type:mongoose.Schema.Types.ObjectId,
        required : false,
        ref:'location'
    },
    log_id:{
     type:mongoose.Schema.Types.ObjectId,
        required : false,
        ref:'log'
    },
    backup_id:{
     type:mongoose.Schema.Types.ObjectId,
        required : false,
        ref:'backup'
    },
    undo_id:{
     type:mongoose.Schema.Types.ObjectId,
        required : false,
        ref:'undo'
    },
    delievryMan_id:{
     type:mongoose.Schema.Types.ObjectId,
        required : false,
        ref:'DeliveryMan'
    }

    
});

// Define a pre-save hook to auto-increment the id field
DeliveryOrderSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestOrder= await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestOrder ? highestOrder.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const DeliveryOrder = mongoose.model('DeliveryOrder', DeliveryOrderSchema);

module.exports = DeliveryOrder;