'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const user = [
      {
        namaAwal:"Selly",
        namaAkhir:"Bintang",
        alamat:"Banyuwangi",
        email:"melananda@gmail.com",
        poto:"../view/1690964538860.jpg",
        kataSandi:"12345678910",
        role:1,
        updatedAt:new Date(),
        createdAt:new Date()
      },{
        namaAwal:"Selly",
        namaAkhir:"Bintang",
        alamat:"Banyuwangi",
        email:"melananda123@gmail.com",
        poto:"../view/1690964538860.jpg",
        kataSandi:"12345678910",
        role:2,
        updatedAt:new Date(),
        createdAt:new Date()
      }]
    return queryInterface.bulkInsert('Users',user,{});
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};