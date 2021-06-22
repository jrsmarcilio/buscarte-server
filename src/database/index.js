import Sequelize from "sequelize";

import Artista from "../app/models/Artista";
import Artista_atelie from "../app/models/Artista_atelie";
import Artista_categoria from "../app/models/Artista_categoria";
import Atelie from "../app/models/Atelie";
import Categoria from "../app/models/Categoria";
import Espacos_culturais from "../app/models/Espacos_culturais";
import Foto_atelie from "../app/models/Foto_atelie";
import Foto_obras from "../app/models/Foto_obras";
import Artista_foto_atelie from "../app/models/Artista_foto_atelie";

import databaseconfig from "../config/database";

const models = [
  Artista,
  Artista_atelie,
  Artista_categoria,
  Atelie,
  Categoria,
  Espacos_culturais,
  Artista_foto_atelie,
  Foto_obras,
  Foto_atelie,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseconfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();

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
