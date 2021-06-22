"use strict";require("dotenv/config");

module.exports = {
  dialect: "mysql",
  dialectOptions: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    port: process.env.DB_PORT,
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

// import mysql from "mysql2";
// import util from "util";
// const db = {};

// db.exec = async (sql, values) => {
//   const conn = mysql.createConnection(process.env.DB_URL);
//   const query = util.promisify(conn.query).bind(conn);
//   try {
//     const rows = await query(sql, values);
//     return rows;
//   } catch (e) {
//     console.log(e);
//     return [];
//   } finally {
//     conn.end();
//   }
// };

// export default db;
