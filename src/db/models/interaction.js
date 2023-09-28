"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Interaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Interaction.init(
    {
      user_id: DataTypes.BIGINT,
      log_id: DataTypes.BIGINT,
      uuid: DataTypes.UUID,
      description: DataTypes.ARRAY,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      created_by: DataTypes.BIGINT,
      updated_by: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "interactions",
      underscored: true,
    }
  )
  return Interaction
}
