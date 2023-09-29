"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1 mentor, many position
      Mentor.belongsToMany(models.Position, {
        through: models.HandledPosition,
      })
    }
  }
  Mentor.init(
    {
      uuid: DataTypes.UUIDV4,
      fullname: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      created_by: DataTypes.UUIDV4,
      updated_by: DataTypes.UUIDV4,
    },
    {
      sequelize,
      modelName: "mentors",
      underscored: true,
    }
  )
  return Mentor
}
