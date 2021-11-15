
const contenedorMercaVerdura = document.getElementById('contenedor-mercaderia__Verdura')
const contenedorCarrito2 = document.getElementById('carrito-contenedor2')

const contadorCarrito2= document.getElementById('contador-carrito2')
const precioTotal2 = document.getElementById('precioTotal2')

const carritoVerduras = []

const mostrarProductos2 = (array) =>{
    contenedorMercaVerdura.innerHTML= ''

    array.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                        <img src= ${producto.img} alt = "">
                        <h3>${producto.nombre}</h3>
                        <p class="precioProducto">Precio:$${producto.precio}</p></p>
                        <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        
                        `
                   contenedorMercaVerdura.appendChild(div)    
        
    });
    
}
mostrarProductos2(stockMercaderiaVerdura)

////agregando al carrito///////

const agregarAlCarrito = (itemId) => {

    const productoEnCarrito = carritoVerduras.find((prod) => prod.id === itemId)

    if (productoEnCarrito) {
        productoEnCarrito.kilos++
    } else {

        const producto = stockMercaderiaVerdura.find( (prod) => prod.id === itemId)
    
        carritoVerduras.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            kilos: 1
        })
    }
    

    console.log(carritoVerduras)
    actualizarCarrito()
    
    let guardarDatos = JSON.stringify(carritoVerduras)
    localStorage.setItem("carritoVerduras", guardarDatos)
}

// === RENDER CARRITO ===

const actualizarCarrito = () => {
    contenedorCarrito2.innerHTML = ""

    carritoVerduras.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>kilos: ${prod.kilos}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
             `

        contenedorCarrito2.appendChild(div)
    })

    contadorCarrito2.innerText = carritoVerduras.reduce((acc, prod) => acc += prod.kilos, 0)
    precioTotal2.innerText = carritoVerduras.reduce((acc, prod) => acc += prod.precio * prod.kilos, 0)
}

// === ELIMINAR PRODUCTO ===

const eliminarProducto = (itemId) => {
    const producto = carritoVerduras.find((prod) => prod.id === itemId)
    
    producto.kilos--

    if (producto.kilos === 0) {
        const index = carritoVerduras.indexOf(producto)
        carritoVerduras.splice(index, 1)
    }
   
    actualizarCarrito()
    console.log(carritoVerduras);
    
}