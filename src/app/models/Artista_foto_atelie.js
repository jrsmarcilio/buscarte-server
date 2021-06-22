import Sequelize, { Model } from "sequelize";

class Artista_foto_atelie extends Model {
  static init(sequelize) {
    super.init(
      {
        fk_atelie_id_atelie: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        fk_foto_atelie_id_foto_atelie: Sequelize.INTEGER,
      },
      {
        tableName: "artista_foto_atelie",
        timestamps: false,
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Atelie, { foreignKey: "fk_atelie_id_atelie" }),
      this.belongsTo(models.Foto_atelie, {
        foreignKey: "fk_foto_atelie_id_foto_atelie",
      });
  }
}

export default Artista_foto_atelie;
