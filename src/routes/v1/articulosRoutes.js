const express = require("express");
const router = express.Router();
const articulosController = require("../../controllers/articulosController")

// localhost:3001/api/v1/articulo/
router.route("/")
    .get(articulosController.getAllArticulos)

// localhost:3001/api/v1/articulos/:prod
router.route("/:prod")
    .get(articulosController.getOneArticulo)

module.exports.router = router