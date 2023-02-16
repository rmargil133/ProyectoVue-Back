const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usuariosController.js");

// localhost:3001/api/v1/users
router.route("/")
    .post(usersController.createOneUser);

// localhost:3001/api/v1/users/:prod
router.route("/:prod")
    .get(usersController.getOneUser)
    .put(usersController.updateOneUser)
    .delete(usersController.deleteOneUser);

module.exports.router = router