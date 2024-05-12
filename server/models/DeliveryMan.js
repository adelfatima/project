
const mongoose = require('mongoose');

const DeliveryManSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
  
    name: {
        type: String,
        // required : true
    },
    email: {
        type: String,
        // required : false
    },
    phoneNumber: {
     type: String,
     // required : false
 },
 admin_id: {
     type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
 },
 magazine_id: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'magazine',
 },
 CitiesAndVilleges: {
     type: Array,
     // required : false
 },
 deliveryOrderId:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'deliveryOrder',
 },
 review_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'review',
 },
 customer_location_id:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'CustomerLocation',
 }
});

// Define a pre-save hook to auto-increment the id fiel
DeliveryManSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestMan= await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestMan ? highestMan.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const DeliveryMan = mongoose.model('DeliveryMan', DeliveryManSchema);

module.exports = DeliveryMan;