
const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
  
    name: {
        type: String,
        // required : true
    },
    description: {
        type: String,
        // required : false
    },

 delivery_order_id:{
     type:mongoose.Schema.Types.ObjectId,
     required : false,
     ref:'delivery_order'
 },
 longitude:{
type:String
 },
 latitude:{
type:String
 },
 log_id:{
     type:mongoose.Schema.Types.ObjectId,
     required : false,
     ref:'logs'
 },
 undo_id:{
     type:mongoose.Schema.Types.ObjectId,
     required : false,
     ref:'undo'
 },
 backup_id:{
     type:mongoose.Schema.Types.ObjectId,
     required : false,
     ref:'backup'
 },
 statistics_id:{
     type:mongoose.Schema.Types.ObjectId,
     required : false,
     ref:'statistics'
 }
    
});

// Define a pre-save hook to auto-increment the id field
LocationSchema.pre('save', async function(next) {
    if (!this.isNew) {
        return next(); // If the document is not new, do nothing
    }

    try {
        // Find the highest id in the collection
        const highestLocation= await this.constructor.findOne({}, {}, { sort: { 'id': -1 } });

        // Set the id field to the highest id + 1 or 1 if no documents exist
        this.id = highestLocation ? highestLocation.id + 1 : 1;
    } catch (error) {
        return next(error); // Pass any error to the next middleware
    }

    next();
});

const Location = mongoose.model('Location',LocationSchema);

module.exports = Location;