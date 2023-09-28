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
      // define association here
    }
  }
  HandledPosition.init(
    {
      uuid: DataTypes.UUID,
      position_id: DataTypes.BIGINT,
      mentor_id: DataTypes.BIGINT,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      created_by: DataTypes.BIGINT,
      updated_by: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "handled_positions",
      underscored: true,
    }
  )
  return HandledPosition
}