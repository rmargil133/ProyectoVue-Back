const usersModelo = require("../database/usuariosModelo.js");
const {v4: uuid} = require("uuid")

const createOneUser = (usuario) => {
  
    const usuarioNuevo = {
      ...usuario,
      id: uuid(), //GENERAR UN ID ALEATORIO CON UUID
      fechaAlta: new Date().toLocaleDateString(),
      fechaModificacion: new Date().toLocaleDateString(),
    };
  

    const usuarioInsertado = usersModelo.insertUser(usuarioNuevo)
    
    if(!usuarioInsertado) return false
    return usuarioInsertado
};


const getOneUser = (nombre) => {
    const oneUser = usersModelo.getOneUser(nombre);
    return oneUser;
};
  
  
const updateOneUser = (nombre, usuario) => {
    //TODO: implementar funcionalidad para actualizar un usuario
    const usuarioCambiado = {
      ...usuario,
      fechaModificacion: new Date().toLocaleDateString()
    }
  
    const updatedUser = usersModelo.updateOneUser(nombre, usuarioCambiado)
  
    if(!updatedUser){
      return false
    }
    else{
      return updatedUser
    }
};
  

const deleteOneUser = (nombre) => {
    //TODO: implementar funcionalidad para eliminar un usuario
    const Usuario = usersModelo.getOneUser(nombre)
  
    if(!Usuario){
      return false
    }
    else{
      usersModelo.deleteOneUser(nombre)
  
      if(!usersModelo.getOneUser(nombre)){
        return Usuario
      }
      else{
        return false
      }
    }
};
  
  
module.exports = {
    createOneUser,
    getOneUser,
    updateOneUser,
    deleteOneUser
};