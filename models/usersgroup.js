'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UsersGroup.init({
    UserId: DataTypes.STRING,
    GroupId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UsersGroup',
  });
  return UsersGroup;
};