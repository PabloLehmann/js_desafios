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
/* localStorage.setItem ('nuevo', nuevosClientes) */
const nuevosClientes2=JSON.stringify(nuevosClientes)
localStorage.setItem('nuevos', nuevosClientes2)
console.log(nuevosClientes2)
localStorage.getItem('nuevosClientes2')

}
////////////////////////////////////////////////////////

let datosGuardadosFrutas = JSON.parse(localStorage.getItem("carrito"))
let datosGuardadosVarios = JSON.parse(localStorage.getItem("carritoVarios"))
let datosGuardadosVerduras = JSON.parse(localStorage.getItem("carritoVerduras"))
let datosTotales = datosGuardadosFrutas.concat(datosGuardadosVarios, datosGuardadosVerduras)
console.log(datosTotales);

let tablaDeCompras = document.getElementById("tabla--compra")
datosTotales.forEach((obj)=>{
  let fila = document.createElement("tr")
  let celdaNombre=document.createElement("td")
  celdaNombre.innerHTML = obj.nombre
  let celdaCantidad = document.createElement("td")
  celdaCantidad.innerHTML = obj.cantidad
  let celdaPrecio = document.createElement("td")
  celdaPrecio.innerHTML = obj.precio
fila.appendChild (celdaNombre)
fila.appendChild (celdaCantidad)
fila.appendChild (celdaPrecio)
tablaDeCompras.appendChild(fila)

})