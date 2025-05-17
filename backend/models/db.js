const Sequelize = require("sequelize");
const sequelize = new Sequelize("geekbase", "root", "@eertm290177", {
  port: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize,
  sequelize,
};
