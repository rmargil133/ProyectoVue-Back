const articulosModelo = require("../database/articulosModelo.js");

const getAllArticulos = () => {

  const allArticulos = articulosModelo.getAllArticulos();
  return allArticulos;
};

const getOneArticulo = (nombre) => {
    const oneArticulo = articulosModelo.getOneArticulo(nombre);
    return oneArticulo;
};

module.exports = {
    getAllArticulos,
    getOneArticulo
};