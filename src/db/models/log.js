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
      // 1 log, 1 activity
      LogDate.hasOne(models.Activity, {
        sourceKey: "uuid",
        foreignKey: "log_id"
      })
      // 1 log, 1 output
      LogDate.hasOne(models.Output, {
        sourceKey: "uuid",
        foreignKey: "log_id"
      })
      // 1 log, 1 interaction
      LogDate.hasOne(models.Interaction, {
        sourceKey: "uuid",
        foreignKey: "log_id"
      })

    }
  }
  LogDate.init(
    {
      uuid: DataTypes.UUIDV4,
      log_date: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      created_by: DataTypes.UUIDV4,
      updated_by: DataTypes.UUIDV4,
    },
    {
      sequelize,
      modelName: "logs",
      underscored: true,
    }
  )
  return LogDate
}
