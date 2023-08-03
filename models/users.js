'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Roles,{foreignKey:'role', as:'Roles'})
    }
  }
  Users.init({
    namaAwal: DataTypes.STRING,
    namaAkhir: DataTypes.STRING,
    alamat: DataTypes.STRING,
    poto: DataTypes.TEXT,
    email: DataTypes.STRING,
    kataSandi: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};