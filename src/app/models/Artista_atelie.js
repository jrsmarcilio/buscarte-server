import Sequelize, { Model } from "sequelize";

class Artista_atelie extends Model {
  static init(sequelize) {
    super.init(
      {
        fk_artista_id_artista: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        fk_atelie_id_atelie: Sequelize.INTEGER,
      },
      {
        timestamps: false,
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Atelie, { foreignKey: "fk_atelie_id_atelie" }),
      this.belongsTo(models.Artista, { foreignKey: "fk_artista_id_artista" });
  }
}

export default Artista_atelie;
