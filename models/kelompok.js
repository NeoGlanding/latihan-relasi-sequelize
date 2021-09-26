'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelompok extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {through: 'UsersGroups'});
    }
  };
  Kelompok.init({
    namaKelompok: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kelompok',
  });
  return Kelompok;
};