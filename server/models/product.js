const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{
        type : Number
    },
    name:{
        type:String,
        required : false
    },
    image_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'image'
    },
    production_Date:{
        type : Date
        // required : false
    },
    Expiry_Date:{
        type:Date
        // required : true
    },
    purshace_price:{
     type:Number
 },
 selling_price :{
    type:Number   
},
expense :{
    type:Number   
},
name:{
    type:String
}
});


const Product = new mongoose.model('Product',productSchema);

module.exports = Product;