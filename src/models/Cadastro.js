const { Sequelize, Model } = require("sequelize");

class Cadastro extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        telefone: Sequelize.STRING,
        messagem: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
module.exports = { Cadastro };
