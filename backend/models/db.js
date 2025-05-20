const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("geekbase", "root", "@eertm290177", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
