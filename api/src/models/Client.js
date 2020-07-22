const {Model, DataTypes} = require("sequelize");

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING
        },
        cpf: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING
        },
        password: {
          allowNull: false,
          type: DataTypes.STRING
        },
        phone: {
          allowNull: false,
          type: DataTypes.STRING,
          defalutValue: "55"
        },
        address: {
          allowNull: false,
          type: DataTypes.STRING
        },
        lat: {
          allowNull: false,
          type: DataTypes.STRING,
          defalutValue: "0"
        },
        long: {
          allowNull: false,
          type: DataTypes.STRING,
          defalutValue: "0"
        },
      },
      {
        sequelize,
        // modelName:'Client',
        // tableName:'clients'
      }
    );
  }
}

module.exports = Client;
