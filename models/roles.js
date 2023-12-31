'use strict';
const { mode } = require('crypto-js');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.Users,{foreignKey:'role', as:'Users'})
    }
  }
  Roles.init({
    id_role: DataTypes.STRING,
    hak_Akses: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};