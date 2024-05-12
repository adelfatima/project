
const mongoose = require('mongoose');

const magazineSchema = new mongoose.Schema({
    id:{
        type : Number
    },
    name:{
        type:String
        //required : true
    },
    product_id : {
        type:mongoose.Schema.Types.ObjectId,
        // required : false,
        ref:'product'
    },
    magazine_location :{
        type : String
        // required : false
    },
    telephone_number:{
        type:String
        // required : true
    },
    admin_id :{
     type:mongoose.Schema.Types.ObjectId,
        required : false,
        ref:'admin'
 },

});


const Magazine = new mongoose.model('Magazine',magazineSchema);

module.exports = Magazine;