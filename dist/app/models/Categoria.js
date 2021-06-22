"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Categoria extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_categoria: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
        },
        titulo: _sequelize2.default.STRING(30),
        descricao: _sequelize2.default.TEXT,
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

exports. default = Categoria;
