'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Brands,{foreignKey:'id_clients', as :'Brands'})
    }
  }
  Clients.init({
    nama: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    alamat_domisili: DataTypes.STRING,
    ID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};