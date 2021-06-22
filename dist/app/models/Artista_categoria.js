"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Artista_categoria extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        fk_artista_id_artista: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
        },
        fk_categoria_id_categoria: _sequelize2.default.INTEGER,
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

exports. default = Artista_categoria;
