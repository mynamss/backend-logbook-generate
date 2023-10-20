"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1 role, many user
      Role.hasMany(models.users, {
        sourceKey: "uuid",
        foreignKey: "role_id",
      })
    }
  }
  Role.init(
    {
      uuid: DataTypes.UUIDV4,
      role_name: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      created_by: DataTypes.UUIDV4,
      updated_by: DataTypes.UUIDV4,
    },
    {
      sequelize,
      modelName: "roles",
      underscored: true,
      timestamps: false,
    }
  )
  return Role
}
