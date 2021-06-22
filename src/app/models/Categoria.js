import Sequelize, { Model } from "sequelize";

class Categoria extends Model {
  static init(sequelize) {
    super.init(
      {
        id_categoria: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        titulo: Sequelize.STRING(30),
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
    this.belongsTo(models.Artista, { foreignKey: "fk_artista_id_artista" });
  }
}

export default Categoria;
