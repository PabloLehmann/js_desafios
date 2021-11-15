const contenedorMercaVarios = document.getElementById('contenedor-mercaderia__Varios')
const contenedorCarrito3 = document.getElementById('carrito-contenedor3')

const contadorCarrito3= document.getElementById('contador-carrito3')
const precioTotal3 = document.getElementById('precioTotal3')

const carritoVarios = []

const mostrarProductos3 = (array) =>{
    contenedorMercaVarios.innerHTML= ''

    array.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                        <img src= ${producto.img} alt = "">
                        <h3>${producto.nombre}</h3>
                        <p class="precioProducto">Precio:$${producto.precio}</p></p>
                        <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        
                        `
                   contenedorMercaVarios.appendChild(div)    
        
    });
    
}
mostrarProductos3(stockMercaderiaVarios)

////agregando al carrito///////

const agregarAlCarrito = (itemId) => {

    const productoEnCarrito = carritoVarios.find((prod) => prod.id === itemId)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++
    } else {

        const producto = stockMercaderiaVarios.find( (prod) => prod.id === itemId)
    
        carritoVarios.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        })
    }
    

    console.log(carritoVarios)
    actualizarCarrito()
    let guardarDatos = JSON.stringify(carritoVarios)
    localStorage.setItem("carritoVarios", guardarDatos)
}

// === RENDER CARRITO ===

const actualizarCarrito = () => {
    contenedorCarrito3.innerHTML = ""

    carritoVarios.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
             `

        contenedorCarrito3.appendChild(div)
        
    })

    contadorCarrito3.innerText = carritoVarios.reduce((acc, prod) => acc += prod.cantidad, 0)
    precioTotal3.innerText = carritoVarios.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
    
}

// === ELIMINAR PRODUCTO ===

const eliminarProducto = (itemId) => {
    const producto = carritoVarios.find((prod) => prod.id === itemId)
    
    producto.cantidad--

    if (producto.cantidad === 0) {
        const index = carritoVarios.indexOf(producto)
        carritoVarios.splice(index, 1)
    }
   
    actualizarCarrito()
}