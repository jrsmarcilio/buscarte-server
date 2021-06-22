import Sequelize, { Model } from "sequelize";

class Foto_obras extends Model {
  static init(sequelize) {
    super.init(
      {
        id_foto_obras: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        descricao: Sequelize.TEXT,
        data: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal(
            "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
          ),
        },
        foto: Sequelize.STRING(50),
        titulo: Sequelize.STRING(30),
        fk_artista_id_artista: Sequelize.INTEGER,
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

export default Foto_obras;
