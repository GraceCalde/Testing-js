const { validarPerfilUsuario } = require("../perfilUsuario.js");

describe("Feature: Validación de datos de usuario (Nuevos Escenarios)", () => {

    // Scenario 1: El perfil de un usuario es válido con una estructura conocida
    test('Given Dado que tengo una función de validación de usuario, And tengo un objeto de usuario con un nombre y un email, When Cuando el email del usuario es "testuser@example.com", Then Entonces la validación debe devolver un objeto de resultado, And este objeto debe contener la propiedad "esValido" con el valor true, And el objeto debe contener una propiedad "errores" que sea un array vacío', () => {
        // Given
        const usuario = {
            nombre: "Grace",
            edad: 30,
            email: "gracecal@example.com"
        };

        // When
        const resultado = validarPerfilUsuario(usuario);

        // Then & And:  Validación exacta 
        expect(resultado).toStrictEqual({
            esValido: true,
            errores: []
        });

        // Then & And:  Validación parcial
        expect(resultado).toMatchObject({
            esValido: true,
            errores: []
        });

        expect(resultado).toEqual(
            expect.objectContaining({
                esValido: true,
                errores: expect.arrayContaining([])
            })
        );
    });

    // Scenario 2: Un usuario sin email lanza un error
    test('Given Dado que tengo una función de validación de usuario, And tengo un objeto de usuario con un nombre pero sin un email, When Cuando se intenta validar al usuario, Then Entonces la función debe lanzar un error, And el mensaje de error debe contener la cadena "email"', () => {
        // Given
        const usuario = {
            nombre: "William",
            edad: 36
        };

        // When & Then:
        expect(() => {
            validarPerfilUsuario(usuario);
        }).toThrow("email"); 
    });

});