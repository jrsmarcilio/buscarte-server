import Sequelize, { Model } from "sequelize";

class Foto_atelie extends Model {
  static init(sequelize) {
    super.init(
      {
        id_foto_atelie: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        descricao: Sequelize.TEXT,
        data: Sequelize.DATE,
        titulo: Sequelize.STRING(30),
      },
      {
        tableName: "foto_atelie",
        timestamps: false,
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Artista_foto_atelie, {
      foreignKey: "id_foto_atelie",
    });
  }
}

export default Foto_atelie;
