const articulosServices = require("../services/articulosServices.js");

//  /api/v1/articulos
// Funcionalidad para devolver todos los articulos
const getAllArticulos = (req, res, next) => {
    const allArticulos = articulosServices.getAllArticulos();
    if (!Object.keys(allArticulos).length == 0) {
       res.send(allArticulos);
    } else {
       res.status(404).end();
    }
};



//  /api/v1/articulos/:prod
const getOneArticulo = (req, res, next) => {
    const { prod } = req.params;
  
    const oneArticulo = articulosServices.getOneArticulo(prod);
  
    if (oneArticulo) {
      res.send(oneArticulo);
    } else {
      res.status(404);
    }
};

module.exports = {
    getAllArticulos,
    getOneArticulo
};