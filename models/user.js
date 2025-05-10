const { DataTypes } = require("sequelize");
const sequelize = require("../config/databaseConfig"); // Sequelize instance
// const generateSnowflakeId = require("../utils/generateSnowflakeId");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER, // Use INTEGER for auto-increment
      primaryKey: true,
      autoIncrement: true, // Enable auto-increment
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
