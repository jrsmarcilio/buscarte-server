"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Artista_foto_atelie extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        fk_atelie_id_atelie: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
        },
        fk_foto_atelie_id_foto_atelie: _sequelize2.default.INTEGER,
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

exports. default = Artista_foto_atelie;
