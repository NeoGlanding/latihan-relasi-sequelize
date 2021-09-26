'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Role, {foreignKey: 'RoleId'}) // Pakai fields sendiri
      this.belongsToMany(models.Kelompok, {through: 'UsersGroups'})
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    RoleId: DataTypes.INTEGER(10)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};