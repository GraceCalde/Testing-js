function validarPerfilUsuario(usuario) {
    if (!usuario || usuario.email === undefined) {
        throw new Error("El email es un campo obligatorio para el usuario.");
    }

    const errores = [];
    if (usuario.nombre === undefined) {
        errores.push("El nombre debe estar definido.");
    }
    if (typeof usuario.edad !== "number" || usuario.edad <= 18) {
        errores.push("La edad debe ser mayor a 18 años.");
    }
    if (!usuario.email.includes("@")) {
        errores.push("El email debe contener '@'.");
    }

    
    return {
        esValido: errores.length === 0,
        errores: errores
    };
}

module.exports = { validarPerfilUsuario };