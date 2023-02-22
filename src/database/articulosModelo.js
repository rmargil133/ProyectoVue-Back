const datos = require("./articulos.json")

const getAllArticulos = () => {
    return datos.articulos
}

const getOneArticulo = (nombre) => {
    const oneArticulo = datos.articulos[nombre]
    return oneArticulo
}

module.exports = {
    getAllArticulos,
    getOneArticulo
};