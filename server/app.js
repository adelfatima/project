const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 4000;
const mongoUri = 'mongodb+srv://adel:adeladel@my-cluster.lukbgqq.mongodb.net/store-fatima-adel';

const connectAndListen = async () => {
    try {
        await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to database');
    } catch (error) {
        console.error('Connection error:', error.message);
    }
    app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
}

connectAndListen();

const admin=require('./routers/adminrouters');
app.use('/admin',admin);

const backup=require('./routers/backuprouters');
app.use('/backup',backup);

const customer=require('./routers/customerrouter');
app.use('/customer',customer);

const deliveryorder=require('./routers/deliveryorderrouter');
app.use('/deliveryorder',deliveryorder);

const deliveryman=require('./routers/deliverymanrouter');
app.use('/deliveryman',deliveryman);

const invoice=require('./routers/invoicerouter');
app.use('/invoice',invoice);

const location=require('./routers/locationrouter');
app.use('/location',location);

const logs=require('./routers/logsrouter');
app.use('/logs',logs);

const magazine=require('./routers/magazinerouter');
app.use('/magazine',magazine);

const operation=require('./routers/operationrouter');
app.use('/operation',operation);

const payment=require('./routers/paymentrouter');
app.use('/payment',payment);

const product=require('./routers/productrouter');
app.use('/product', product);

const image=require('./routers/imagerouter');
app.use('/image', image);

const account=require('./routers/purchaseacountrouter');
app.use('/account', account);

const superadmin=require('./routers/superadminrouter');
app.use('/superadmin', superadmin);


const undo=require('./routers/undorouter');
app.use('/undo', undo);

const getproductandimage=require('./routers/getProductAndImageByProductIdRouter');
app.use('/getproductandimage', getproductandimage);


const getmagazinebyadminid=require('./routers/findMagaizineByAdminIdRouter');
app.use('/getmagazinebyadminid', getmagazinebyadminid);

const getproductbyimageid=require('./routers/getproductbyimageidRouter');
app.use('/getproductbyimageid', getproductbyimageid);

const deletesuperAdmin=require('./routers/DeletefiledfromsuperadminRouter');
app.use('/deletesuperAdmin', deletesuperAdmin);

const updatesuperadmin=require('./routers/updatesuperadminRouter');
app.use('/updatesuperadmin', updatesuperadmin);

const AddproductandImage=require('./routers/postdataintotwomodel(product&image)Router');
app.use('/AddproductandImage', AddproductandImage);



const Product = require('./models/product');
const Image = require('./models/image');
const targetId = '66381a79c1b50fe7f7efe477';

app.post('/deleteproductandimage', async (req, res) => {
    try {
        // Find and delete the product
        const deletedProduct = await Product.findByIdAndDelete(targetId);
        if (!deletedProduct) {
            return res.status(404).send('Product not found');
        }

        // Delete the associated images
        const deletedImages = await Image.deleteOne({ product_id: targetId });
        console.log('Associated images deleted:', deletedImages);

        console.log('Product and associated images deleted successfully:', deletedProduct);
        res.send('Product and associated images deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred');
    }
});


  

       



