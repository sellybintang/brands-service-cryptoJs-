'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roles = [{
      id_role:"1",
      hak_Akses:["semuaProfileUsers","ubahProfile", "hapusProfile", "buatAkunUser"],
      updatedAt:new Date(),
      createdAt:new Date()
    },{
      id_role:"2",
      hak_Akses:["semuaProfileUsers", "buatAkunUser"],
      updatedAt:new Date(),
      createdAt:new Date()
    },{
      id_role:"3",
      hak_Akses:["semuaProfileUsers", "buatClients", "ubahClients", "hapusClients","buatBrands", "ubahBrands","hapusBrands"],
      updatedAt:new Date(),
      createdAt:new Date()
    }]
    return queryInterface.bulkInsert('Roles',roles,{});
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};