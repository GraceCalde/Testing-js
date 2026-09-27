const { obtenerProductos } = require('../productos.js');

global.fetch = jest.fn();

afterEach(() => jest.clearAllMocks());

test('Given que la API de productos está disponible, When solicito la lista de productos, Then debo recibir un array de productos', async () => {
fetch.mockResolvedValueOnce({
ok: true,
json: () =>
Promise.resolve([
{ id: 1, nombre: 'Laptop' },
{ id: 2, nombre: 'Mouse' }
])
});

const productos = await obtenerProductos();

expect(Array.isArray(productos)).toBe(true);
expect(productos).toEqual([
{ id: 1, nombre: 'Laptop' },
{ id: 2, nombre: 'Mouse' }
]);

productos.forEach(producto => {
expect(producto).toHaveProperty('id');
expect(producto).toHaveProperty('nombre');
});

expect(fetch).toHaveBeenCalledTimes(1);
expect(fetch).toHaveBeenCalledWith(
'https://api.ejemplo.com/products'
);
});

test('Given que la API de productos no está disponible, When solicito la lista de productos, Then debo recibir un error "No se pudieron obtener los productos"', async () => {
fetch.mockResolvedValueOnce({
ok: false
});

await expect(obtenerProductos())
.rejects
.toThrow('No se pudieron obtener los productos');

expect(fetch).toHaveBeenCalledTimes(1);
expect(fetch).toHaveBeenCalledWith(
'https://api.ejemplo.com/products'
);
});
