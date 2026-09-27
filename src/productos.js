async function obtenerProductos() {
const res = await fetch('https://api.ejemplo.com/products');

if (!res.ok) {
throw new Error('No se pudieron obtener los productos');
}

return res.json();
}

module.exports = { obtenerProductos };
