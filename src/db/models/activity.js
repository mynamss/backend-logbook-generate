"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1 activity, 1 user
      Activity.belongsTo(models.User, {
        foreignKey: "user_id",
      })
      // 1 activity, 1 log
      Activity.belongsTo(models.LogDate, {
        foreignKey: "log_id",
      })
    }
  }
  Activity.init(
    {
      user_id: DataTypes.UUIDV4,
      log_id: DataTypes.UUIDV4,
      uuid: DataTypes.UUIDV4,
      description: DataTypes.ARRAY,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      created_by: DataTypes.UUIDV4,
      updated_by: DataTypes.UUIDV4,
    },
    {
      sequelize,
      modelName: "activities",
      underscored: true,
    }
  )
  return Activity
}
