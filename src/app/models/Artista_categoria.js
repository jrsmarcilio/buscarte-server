import Sequelize, { Model } from "sequelize";

class Artista_categoria extends Model {
  static init(sequelize) {
    super.init(
      {
        fk_artista_id_artista: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        fk_categoria_id_categoria: Sequelize.INTEGER,
      },
      {
        timestamps: false,
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Artista, {
      foreignKey: "fk_artista_id_artista",
    }),
      this.belongsTo(models.Categoria, {
        foreignKey: "fk_categoria_id_categoria",
      });
  }
}

export default Artista_categoria;
