"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class HandledPosition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // back to position
      HandledPosition.belongsTo(models.Position, {
        foreignKey: "position_id",
        
      })
      // back to mentor
      HandledPosition.belongsTo(models.Mentor, {
        foreignKey: "mentor_id",

      })
    }
  }
  HandledPosition.init(
    {
      uuid: DataTypes.UUIDV4,
      position_id: DataTypes.UUIDV4,
      mentor_id: DataTypes.UUIDV4,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      created_by: DataTypes.UUIDV4,
      updated_by: DataTypes.UUIDV4,
    },
    {
      sequelize,
      modelName: "handled_positions",
      underscored: true,
    }
  )
  return HandledPosition
}
