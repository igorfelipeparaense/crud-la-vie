const express = require("express");
const path = require("path");
const erroValidacao = require("./middlewares/erroValidacao");
const db = require("./database");
const routes = require("./routes");
const requestLog = require("./middlewares/requestLog");
const app = express();

db.hasConnection();

app.use(express.json());
app.use(requestLog);
app.use(routes);
app.use(erroValidacao);

app.use('/docs', express.static(path.resolve(__dirname, '..', 'docs',)));

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));