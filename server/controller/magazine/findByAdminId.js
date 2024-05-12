const Magazine = require('../../models/magazine');

const findMagazineByAdminId = async (adminId) => {
  try {
    // Assuming adminId is a Number
    const magazine = await Magazine.findOne({ admin_id: adminId });
    if (!magazine) {
      throw new Error(`Magazine with admin ID ${adminId} not found`);
    }
    return magazine;
  } catch (error) {
    console.error('Error while fetching magazine by admin ID:', error.message);
    throw new Error('Error while fetching magazine by admin ID');
  }
};

module.exports = findMagazineByAdminId;


