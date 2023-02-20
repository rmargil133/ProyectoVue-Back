const usersModelo = require("../database/usuariosModelo.js");
const md5 = require("md5")
const {v4: uuid} = require("uuid")

const createOneUser = (usuario, password) => {
  
    const usuarioNuevo = {
      ...usuario,
      contraseña: md5(password.contraseña), 
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
    const user = {
      correo: oneUser.correo,
      usuario: oneUser.usuario,
      contraseña: oneUser.contraseña,
    }
    return user;
};
  
  
const updateOneUser = (nombre, usuario) => {
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