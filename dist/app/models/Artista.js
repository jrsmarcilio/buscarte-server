"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Artista extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_artista: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
        },
        nome: _sequelize2.default.STRING(50),
        nome_artistico: _sequelize2.default.STRING(50),
        data_nascimento: _sequelize2.default.STRING(10),
        instagram: _sequelize2.default.STRING(30),
        facebook: _sequelize2.default.STRING(30),
        site: _sequelize2.default.STRING(30),
        email: _sequelize2.default.STRING(50),
        blog: _sequelize2.default.STRING(50),
        fone1: _sequelize2.default.CHAR(11),
        fone2: _sequelize2.default.CHAR(11),
        bairro: _sequelize2.default.STRING(20),
        rua: _sequelize2.default.STRING(20),
        cep: _sequelize2.default.CHAR(11),
        numero: _sequelize2.default.STRING(10),
        complemento: _sequelize2.default.STRING(50),
        foto: _sequelize2.default.STRING(50),
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
    this.belongsTo(models.Artista_categoria, { foreignKey: "id_artista" }),
      this.belongsTo(models.Artista_atelie, { foreignKey: "id_artista" });
  }
}

exports. default = Artista;
