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
const busqueda = productos.filter( producto => producto.precio > 180);
console.log (busqueda);




