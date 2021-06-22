import Sequelize, { Model } from "sequelize";

class Espacos_culturais extends Model {
  static init(sequelize) {
    super.init(
      {
        id_espacos_culturais: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        nome: Sequelize.STRING(50),
        bairro: Sequelize.STRING(30),
        rua: Sequelize.STRING(30),
        cep: Sequelize.CHAR(11),
        numero: Sequelize.STRING(10),
        complemento: Sequelize.STRING(50),
        foto: Sequelize.STRING(250),
        latitude: Sequelize.FLOAT,
        longitude: Sequelize.FLOAT,
      },
      {
        timestamps: false,
        sequelize,
      }
    );
    return this;
  }
}

export default Espacos_culturais;
