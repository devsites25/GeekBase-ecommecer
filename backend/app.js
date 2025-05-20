const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();

// configurações
// handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
// path
app.use("/imgs", express.static(path.join(__dirname, "imgs")));
app.use("/image", express.static(path.join(__dirname, "image")));
app.use("/favicon", express.static(path.join(__dirname, "favicon")));
app.use("/frontend", express.static(path.join(__dirname, "frontend")));
app.use(express.static(path.join(__dirname, "frontend")));

// rotas
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "index.html"));
// });

// porta
const port = 8081;
app.listen(port, () => {
  console.log("Rota criada com sucesso na porta 8081, http://localhost:8081");
});
