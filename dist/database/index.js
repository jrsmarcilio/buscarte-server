"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _Artista = require('../app/models/Artista'); var _Artista2 = _interopRequireDefault(_Artista);
var _Artista_atelie = require('../app/models/Artista_atelie'); var _Artista_atelie2 = _interopRequireDefault(_Artista_atelie);
var _Artista_categoria = require('../app/models/Artista_categoria'); var _Artista_categoria2 = _interopRequireDefault(_Artista_categoria);
var _Atelie = require('../app/models/Atelie'); var _Atelie2 = _interopRequireDefault(_Atelie);
var _Categoria = require('../app/models/Categoria'); var _Categoria2 = _interopRequireDefault(_Categoria);
var _Espacos_culturais = require('../app/models/Espacos_culturais'); var _Espacos_culturais2 = _interopRequireDefault(_Espacos_culturais);
var _Foto_atelie = require('../app/models/Foto_atelie'); var _Foto_atelie2 = _interopRequireDefault(_Foto_atelie);
var _Foto_obras = require('../app/models/Foto_obras'); var _Foto_obras2 = _interopRequireDefault(_Foto_obras);
var _Artista_foto_atelie = require('../app/models/Artista_foto_atelie'); var _Artista_foto_atelie2 = _interopRequireDefault(_Artista_foto_atelie);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const models = [
  _Artista2.default,
  _Artista_atelie2.default,
  _Artista_categoria2.default,
  _Atelie2.default,
  _Categoria2.default,
  _Espacos_culturais2.default,
  _Artista_foto_atelie2.default,
  _Foto_obras2.default,
  _Foto_atelie2.default,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

exports. default = new Database();

// import mysql from "mysql2";
// require("dotenv/config");

// const pool = mysql.createPool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
// });

// export default pool;
