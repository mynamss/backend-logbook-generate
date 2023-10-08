"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1 user, 1 role
      User.belongsTo(models.roles, {
        foreignKey: "role_id",
      })
      // 1 user, 1 position
      User.belongsTo(models.positions, {
        foreignKey: "position_id",
      })

      // 1 user, many activity
      User.hasMany(models.activities, {
        sourceKey: "uuid",
        foreignKey: "user_id",
      })
      // 1 user, many output
      User.hasMany(models.outputs, {
        sourceKey: "uuid",
        foreignKey: "user_id",
      })
      // 1 user, many interaction
      User.hasMany(models.interactions, {
        sourceKey: "uuid",
        foreignKey: "user_id",
      })
    }
  }
  User.init(
    {
      role_id: DataTypes.UUIDV4,
      position_id: DataTypes.UUIDV4,
      uuid: DataTypes.UUIDV4,
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.TEXT,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      created_by: DataTypes.UUIDV4,
      updated_by: DataTypes.UUIDV4,
    },
    {
      sequelize,
      modelName: "users",
      underscored: true,
      timestamps: false,
    }
  )
  return User
}
