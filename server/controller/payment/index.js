const Payment = require('../../models/payment');

const addPayment = async (req, res) => {
  try {
    // Extract data from request body
    const {
      id,
      payment_method,
      payment_password,
      customerID
      } = req.body;

    // Create new payment object
    const newPayment = new Payment({
      id,
      payment_method,
      payment_password,
      customerID
    });

    // Save the document to the database
    await newPayment.save();

    // Send a success response
    res.status(201).json({ message: 'Payment data inserted successfully', insertedData: newPayment });
  } catch (error) {
    // If an error occurs, send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const getPayment = async (req,res)=>{
  try{
       const payments = await Payment.find();
       res.status(201).json({message :"found",payments})
  }catch(error){
       res.status(500).json({message : error.message});
  }
  
}

module.exports = {addPayment,getPayment};
