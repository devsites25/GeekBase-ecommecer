const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

// configurações
// handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

// rotas

// porta

const port = 8081;
app.listen(port, () => {
  console.log("Rota criada com sucesso na porta 8081, http://localhost:8081");
});
