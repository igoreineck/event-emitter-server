const express = require("express");

const Teste = require("./controllers/TesteController");

const routes = new express.Router();

routes.get("/teste", Teste.index);

module.exports = routes;
