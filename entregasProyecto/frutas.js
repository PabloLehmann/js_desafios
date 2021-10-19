const contenedorMercaFruta = document.getElementById('contenedor-mercaderia__fruta')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito= document.getElementById('contador-carrito')
const precioTotal = document.getElementById('precioTotal')

const carrito = []

const mostrarProductos = (array) =>{
    contenedorMercaFruta.innerHTML=''

    array.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                        <img src= ${producto.img} alt = "">
                        <h3>${producto.nombre}</h3>
                        <p class="precioProducto">Precio:$${producto.precio}</p></p>
                        <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        
                        `
                   contenedorMercaFruta.appendChild(div)    
        
    });
}
mostrarProductos(stockMercaderia)