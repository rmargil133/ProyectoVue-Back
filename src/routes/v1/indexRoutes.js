const express = require("express");
const router = express.Router();
const articulosRoutes = require("./articulosRoutes");
const usuariosRoutes = require("./usuariosRoutes");

// localhost:3001/api/v1/
router.get("/", (req, res, next)=>{
    res.send("Hola Mundo")
})

router.use("/articulos",  articulosRoutes.router);
router.use("/users",  usuariosRoutes.router);

module.exports.router = router
