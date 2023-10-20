'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserSession.init({
    user_id: DataTypes.UUID,
    status: DataTypes.STRING,
    user_agent: DataTypes.STRING,
    token: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.UUIDV4,
    updated_by: DataTypes.UUIDV4,
  }, {
    sequelize,
    modelName: 'user_sessions',
    underscored: true,
    timestamps: false,
  });
  return UserSession;
};