const { validarPerfilUsuario } = require("../perfilUsuario");

describe("Feature: Validación de datos de usuario", () => {


    //Scenario 1: El perfil de un usuario es válido y completo
    test('Given Dado que tengo un objeto de usuario, And el usuario tiene las propiedades "nombre", "edad", y "email", When Cuando se valida el perfil del usuario, Then Entonces el objeto de usuario no debe ser nulo, And la propiedad "nombre" debe estar definida, And la edad debe ser mayor que 18, And el email debe contener la subcadena "@"', () => {
        //Given
        const usuario = {
            nombre: "Karla",
            edad: 26,
            email: "karla@gmail.com"
        };
        //When
        const resultado = validarPerfilUsuario(usuario);
        //Then
        expect(usuario).not.toBeNull();
        //And
        expect(usuario.nombre).toBeDefined();
        //And
        expect(usuario.edad).toBeGreaterThan(18);
        //And
        expect(usuario.email).toContain("@");
        //Comprobación final de la función
        expect(resultado).toBe(true);
        });



    //Scenario 2: El perfil de un usuario es inválido debido a la falta de la propiedad "email"
    test('Given Dado que tengo un objeto de usuario, And la propiedad "email" no está definida, When Cuando se valida el perfil del usuario, Then Entonces el objeto de usuario no debe ser nulo, And la propiedad "email" debe ser undefined', () => {
    //Given
        const usuario = {
            nombre: "Karla",
            edad: 26,
    
        };
        //When
        const resultado = validarPerfilUsuario(usuario);
        //Then
        expect(usuario).not.toBeNull();
        //And
        expect(usuario.email).toBeUndefined();
        //Comprobación final de la función
        expect(resultado).toBe(false);
    });
});