// Import Sequelize library
var sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define(
    "burger",
    {
      burger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    },
    { timestamps: false }
  );
  return burger;
};
