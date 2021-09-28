let productos =[
    {
        producto: "Banana",
        precio: 230,
    },
    {
        producto: "Naranja",
        precio: 80,
    },
    {
        producto: "Manzana",
        precio: 180,
    },
    {
        producto: "Pomelo",
        precio: 110,
    }
]
const productosPrecio = productos.map( (producto) => {return producto.precio})
console.log(productosPrecio);

const busqueda = productosPrecio.sort( (a, b) => a-b);
console.log (busqueda);




