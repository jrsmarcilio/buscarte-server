"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Foto_atelie extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_foto_atelie: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
        },
        descricao: _sequelize2.default.TEXT,
        data: _sequelize2.default.DATE,
        titulo: _sequelize2.default.STRING(30),
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

exports. default = Foto_atelie;
