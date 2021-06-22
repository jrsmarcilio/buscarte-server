require("dotenv/config");

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
