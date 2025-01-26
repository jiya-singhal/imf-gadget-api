'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Gadget extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  Gadget.init({
    name: DataTypes.STRING,
    status: DataTypes.ENUM('Available', 'Deployed', 'Destroyed', 'Decommissioned'),
    decommissionedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Gadget',
  });
  return Gadget;
};
