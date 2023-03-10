const { Sequelize, DataTypes } = require("sequelize");
const databaseConnectionString = include("/databaseConnectionSequelize");
const sequelize = new Sequelize(databaseConnectionString);

const petTypeModel = sequelize.define(
  "pet_type",
  {
    pet_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "pet_type",
    timestamps: false,
    singular: "pet_type",
    plural: "pet_types",
  }
);

module.exports = petTypeModel;