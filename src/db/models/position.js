"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // many position, many mentor
      Position.belongsToMany(models.Mentor, {
        through: models.HandledPosition,
      })
      // 1 position, many user
      Position.hasMany(models.USer, {
        sourceKey: "uuid",
        foreignKey: "position_id",
      })
    }
  }
  Position.init(
    {
      uuid: DataTypes.UUIDV4,
      dept_name: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      created_by: DataTypes.UUIDV4,
      updated_by: DataTypes.UUIDV4,
    },
    {
      sequelize,
      modelName: "positions",
      underscored: true,
    }
  )
  return Position
}
