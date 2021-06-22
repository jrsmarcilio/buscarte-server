"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Espacos_culturais extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_espacos_culturais: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
        },
        nome: _sequelize2.default.STRING(50),
        bairro: _sequelize2.default.STRING(30),
        rua: _sequelize2.default.STRING(30),
        cep: _sequelize2.default.CHAR(11),
        numero: _sequelize2.default.STRING(10),
        complemento: _sequelize2.default.STRING(50),
        foto: _sequelize2.default.STRING(250),
        latitude: _sequelize2.default.FLOAT,
        longitude: _sequelize2.default.FLOAT,
      },
      {
        timestamps: false,
        sequelize,
      }
    );
    return this;
  }
}

exports. default = Espacos_culturais;
