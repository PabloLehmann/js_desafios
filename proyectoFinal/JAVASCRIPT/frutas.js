
const contenedorMercaFruta = document.getElementById('contenedor-mercaderia__frutas')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const contadorCarrito= document.getElementById('contador-carrito')
const precioTotal = document.getElementById('precioTotal')

const carrito = []

const mostrarProductos = (array) =>{
    contenedorMercaFruta.innerHTML= ''

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

////agregando al carrito///////

const agregarAlCarrito = (itemId) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === itemId)

    if (productoEnCarrito) {
        productoEnCarrito.kilos++
    } else {

        const producto = stockMercaderia.find( (prod) => prod.id === itemId)
    
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            kilos: 1
        })
    }
    

    console.log(carrito)
    actualizarCarrito()
    let guardarDatos = JSON.stringify(carrito)
    localStorage.setItem("carrito", guardarDatos)
}

// === RENDER CARRITO ===

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>kilos: ${prod.kilos}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
             `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.kilos, 0)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.kilos, 0)
}

// === ELIMINAR PRODUCTO ===

const eliminarProducto = (itemId) => {
    const producto = carrito.find((prod) => prod.id === itemId)
    
    producto.kilos--

    if (producto.kilos === 0) {
        const index = carrito.indexOf(producto)
        carrito.splice(index, 1)
    }
   
    actualizarCarrito()
}