const { DataTypes } = require("sequelize");
const sequelize = require("../config/databaseConfig");
const generateSnowflakeID = require("../utils/generateSnowflakeId");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.STRING, // or DataTypes.BIGINT if you prefer
      primaryKey: true,
      defaultValue: () => generateSnowflakeID(),
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // ensures no duplicate usernames
    },
    role: {
      type: DataTypes.ENUM("admin", "user", "moderator"),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
