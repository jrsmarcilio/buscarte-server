"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Artista_atelie extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        fk_artista_id_artista: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
        },
        fk_atelie_id_atelie: _sequelize2.default.INTEGER,
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

exports. default = Artista_atelie;
