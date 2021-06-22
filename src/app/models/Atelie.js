import Sequelize, { Model } from "sequelize";

class Atelie extends Model {
  static init(sequelize) {
    super.init(
      {
        id_atelie: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        nome: Sequelize.STRING(50),
        bairro: Sequelize.STRING(30),
        rua: Sequelize.STRING(30),
        cep: Sequelize.CHAR(11),
        numero: Sequelize.STRING(10),
        complemento: Sequelize.STRING(50),
        latitude: Sequelize.FLOAT,
        longitude: Sequelize.FLOAT,
      },
      {
        tableName: "atelie",
        timestamps: false,
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Artista_atelie, { foreignKey: "id_atelie" }),
      this.belongsTo(models.Artista_foto_atelie, {
        foreignKey: "id_atelie",
      });
  }
}

export default Atelie;
