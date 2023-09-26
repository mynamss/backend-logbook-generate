"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class LogDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LogDate.init(
    {
      uuid: DataTypes.UUID,
      log_date: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      created_by: DataTypes.BIGINT,
      updated_by: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "LogDate",
      underscored: true,
    }
  )
  return LogDate
}
