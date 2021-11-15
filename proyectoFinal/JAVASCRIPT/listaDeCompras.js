let miLista2 = document.getElementById("listaDeCliente")
miLista2.addEventListener("submit", agregarCliente)

function agregarCliente(e){
  e.preventDefault();
  let lista = e.target


console.log (lista.children[0].value )
console.log (lista.children[1].value,)
console.log (lista.children[2].value,)
console.log (lista.children[3].value,)

let datosCompletos = [ lista.children[0].value, lista.children[1].value, lista.children[2].value, lista.children[3].value]

let nombre = lista.children[0].value
let tuNombre = document.getElementsByTagName("h3")[0]
tuNombre.textContent = "Hola " + nombre + " ya tenemos tus datos!"
console.log (datosCompletos)
localStorage.setItem('nuevoCliente', datosCompletos)
console.log (localStorage.getItem('nuevoCliente'))


nuevosClientes =[
    {
nombre: lista.children[0].value,
apellido:lista.children[1].value,
domicilio:lista.children[2].value,
telefono:lista.children[3].value,
    }
]

const nuevosClientes2=JSON.stringify(nuevosClientes)
localStorage.setItem('nuevos', nuevosClientes2)
console.log(nuevosClientes2)
localStorage.getItem('nuevosClientes2')

}
////////////////////////Creando lista////////////////////////////////

let datosGuardadosFrutas = JSON.parse(localStorage.getItem("carrito"))
let datosGuardadosVarios = JSON.parse(localStorage.getItem("carritoVarios"))
let datosGuardadosVerduras = JSON.parse(localStorage.getItem("carritoVerduras"))


let tablaDeCompras = document.getElementById("tabla--compra")
let subTotal;
let subTotal2;
let subTotal3;
let total;

if(datosGuardadosFrutas) {
datosGuardadosFrutas.forEach((obj)=>{
  let fila = document.createElement("tr")
  let celdaNombre=document.createElement("td")
  celdaNombre.innerHTML = obj.nombre
  let celdaKilos = document.createElement("td")
  celdaKilos.innerHTML = obj.kilos
  let celdaPrecio = document.createElement("td")
  celdaPrecio.innerHTML = obj.precio
  let celdaPrecioTotal = document.createElement("td")
  celdaPrecioTotal.innerHTML = obj.precio * obj.kilos

  
  fila.appendChild (celdaNombre)
  fila.appendChild (celdaKilos)
  fila.appendChild (celdaPrecio)
  fila.appendChild (celdaPrecioTotal)
  tablaDeCompras.appendChild(fila)
})

subTotal = datosGuardadosFrutas.reduce((acc, prod) => acc += prod.precio * prod.kilos, 0)
}

if(datosGuardadosVerduras){
datosGuardadosVerduras.forEach((obj)=>{
  let fila2 = document.createElement("tr")
  let celdaNombre2=document.createElement("td")
  celdaNombre2.innerHTML = obj.nombre
  let celdaKilos2 = document.createElement("td")
  celdaKilos2.innerHTML = obj.kilos
  let celdaPrecio2 = document.createElement("td")
  celdaPrecio2.innerHTML = obj.precio
  let celdaPrecioTotal2 = document.createElement("td")
  celdaPrecioTotal2.innerHTML = obj.precio * obj.kilos
  
  fila2.appendChild (celdaNombre2)
fila2.appendChild (celdaKilos2)
fila2.appendChild (celdaPrecio2)
fila2.appendChild (celdaPrecioTotal2)
tablaDeCompras.appendChild(fila2)
})
subTotal2 = datosGuardadosVerduras.reduce((acc, prod) => acc += prod.precio * prod.kilos,0)
}

if(datosGuardadosVarios){
  datosGuardadosVarios.forEach((obj)=>{
  let fila3 = document.createElement("tr")
  let celdaNombre3=document.createElement("td")
  celdaNombre3.innerHTML = obj.nombre
  let celdaKilos3 = document.createElement("td")
  celdaKilos3.innerHTML = obj.kilos
  let celdaPrecio3 = document.createElement("td")
  celdaPrecio3.innerHTML = obj.precio
  let celdaPrecioTotal3 = document.createElement("td")
  celdaPrecioTotal3.innerHTML = obj.precio * obj.kilos
  
  fila3.appendChild (celdaNombre3)
  fila3.appendChild (celdaKilos3)
  fila3.appendChild (celdaPrecio3)
  fila3.appendChild (celdaPrecioTotal3)
  tablaDeCompras.appendChild(fila3)
})
subTotal3 = datosGuardadosVarios.reduce((acc, prod) => acc += prod.precio * prod.kilos,0)
}

  total = subTotal + subTotal2 + subTotal3

let divTotal = document.getElementById("resultado")
  
if(total){
  let mostrarTotal = document.createElement("h3")
  
  mostrarTotal.innerHTML = "El precio total de su comprar es: $" + total
  divTotal.prepend(mostrarTotal)
}
//////////////////////Limpiar tabla / localStore///////////////////////////////

let botonLimpiarPedido = document.getElementById("limpiar__pedido")
botonLimpiarPedido.addEventListener("click",(e)=>{

  localStorage.clear()
  
})
