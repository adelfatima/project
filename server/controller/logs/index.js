const logs = require("../../models/logs");

const addLogs = async (req, res) => {

     try {
          
          // Extract data from request body
             const {
            id, 
            operation_id,
            admin_id,
            customer_id,
            product_id,
            magazine_id,
            superadmin_id,
            purchase_acount_id,
            invoice_id,
            location_id,
            backup_id,
            DeliveryMan_id,
            undo_id,
            deliveryOrder
         } = req.body;
     
         // Create new admin object, potentially including imageUrl
         const newLogs = new logs({
          id, 
          operation_id,
          admin_id,
          customer_id,
          product_id,
          magazine_id,
          superadmin_id,
          purchase_acount_id,
          invoice_id,
          location_id,
          backup_id,
          DeliveryMan_id,
          undo_id,
          deliveryOrder
         });
     
          // Save the document to the database
          await newLogs.save();
         
          // Send a success response
         res.status(201).json({ message: 'Example data inserted successfully', insertedData: newLogs });
     //     res.send(newProduct);
     //     console.log(newProduct);
      } catch (error) {
          // If an error occurs, send an error response
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
      }
     };
     const getlogs = async (req,res)=>{
          try{
               const log = await logs.find();
               res.status(201).json({message :"found",log})
          }catch(error){
               res.status(500).json({message : error.message});
          }
          
     }
 module.exports={addLogs,getlogs}