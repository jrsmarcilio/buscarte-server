import Sequelize, { Model } from "sequelize";

class Artista extends Model {
  static init(sequelize) {
    super.init(
      {
        id_artista: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        nome: Sequelize.STRING(50),
        nome_artistico: Sequelize.STRING(50),
        data_nascimento: Sequelize.STRING(10),
        instagram: Sequelize.STRING(30),
        facebook: Sequelize.STRING(30),
        site: Sequelize.STRING(30),
        email: Sequelize.STRING(50),
        blog: Sequelize.STRING(50),
        fone1: Sequelize.CHAR(11),
        fone2: Sequelize.CHAR(11),
        bairro: Sequelize.STRING(20),
        rua: Sequelize.STRING(20),
        cep: Sequelize.CHAR(11),
        numero: Sequelize.STRING(10),
        complemento: Sequelize.STRING(50),
        foto: Sequelize.STRING(50),
        descricao: Sequelize.TEXT,
      },
      {
        timestamps: false,
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Artista_categoria, { foreignKey: "id_artista" }),
      this.belongsTo(models.Artista_atelie, { foreignKey: "id_artista" });
  }
}

export default Artista;
