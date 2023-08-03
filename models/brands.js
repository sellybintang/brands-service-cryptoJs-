'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Clients,{foreignKey:'id_clients', as: 'Client'})
    }
  }
  Brands.init({
    id_clients: DataTypes.INTEGER,
    logo: DataTypes.TEXT,
    jenisBrands: DataTypes.STRING,
    namaBrands: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brands',
  });
  return Brands;
};