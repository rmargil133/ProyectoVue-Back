const datos = require("./users.json")
const fs = require("fs")


const getOneUser = (nombre) => {
    const oneUser = datos.users[nombre]
    return oneUser
}


const insertUser = (usuario) => {
    const nombre = usuario.nombre
    if(datos["users"][`${nombre}`]){
        return false
    }
    datos.users[nombre] = usuario

    //Escribo el fichero con esos nuevos datos
    fs.writeFileSync(
      "./src/database/users.json",
      JSON.stringify(datos, null, 2),
      "utf8"
    );

    return getOneUser(nombre)
}


const updateOneUser = (nombre, NuevoUsuario) => {

    if(!datos["users"][`${nombre}`]){
        return false
    }
    datos.users[nombre].usuario = NuevoUsuario.usuario ? NuevoUsuario.usuario : datos.users[nombre].usuario
    datos.users[nombre].fechaModificacion = NuevoUsuario.fechaModificacion

    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );
  
      return getOneUser(nombre)
}


const deleteOneUser = (nombre) => {
    delete datos.users[nombre]
    
    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );
}


module.exports = {
    getOneUser,
    insertUser,
    updateOneUser,
    deleteOneUser
}