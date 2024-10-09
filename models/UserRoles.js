const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserRoles = sequelize.define(
  "UserRoles",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // why
      primaryKey: true,
    },
  },
  { timestamps: true }
);

module.exports = UserRoles;
