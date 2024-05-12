
const backups = require("../../models/backup");

const addbackups = async (req, res) => {

     try {
          
          // Extract data from request body
             const {
            id, 
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
         const newbackup = new backups({
          id,
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
          await newbackup.save();
         
          // Send a success response
         res.status(201).json({ message: 'Example data inserted successfully', insertedData: newbackup });
     //     res.send(newProduct);
     //     console.log(newProduct);
      } catch (error) {
          // If an error occurs, send an error response
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
      }
     };
     const getbackups = async (req,res)=>{
          try{
               const backs= await backups.find();
               res.status(201).json({message :"found",backs})
          }catch(error){
               res.status(500).json({message : error.message});
          }
          
     }
     module.exports = { addbackups, getbackups };