

const titulo= document.getElementsByTagName("h1")[0]
titulo.textContent= "Verduleria virtual"

const preg1= document.getElementsByTagName("h3")[0]
preg1.textContent= "Ingrese el valor de la mercaderia"

const preg2 = document.getElementsByTagName('h3')[1]
preg2.textContent = "e ingrese el peso neto de la mercaderia"

//const tituloVerdura = document.getElementsByTagName('h2')[0]
//tituloVerdura.textContent = "Lista de verduras"
//prompt("Ingrese lista de verduras")

//let listaMercaderia = document.getElementsByTagName('li')
//for(let li of listaMercaderia){
  //li.textContent =  prompt( "Ingrese la mercaderia")

    //console.log( li)
//}

//////////////////////////////////////////////////////////////
let frutas= ["banana", "manzana", "pera", "naranja", "mandarina"];

let miGanancia = document.getElementById("ganancia")
const select = document.getElementById('fruta')

frutas.forEach( (fruta) => {
    const option = document.createElement('option')
    option.value = fruta
    option.innerHTML = fruta

    select.appendChild(option)
    console.log(fruta)
})


miGanancia.addEventListener("submit", agregarGanancia)

function agregarGanancia(a){

a.preventDefault();

let ganancias = a.target

console.log(ganancias.children[1].value); 
console.log(ganancias.children[2].value);  

let valor = ganancias.children[1].value;
let kilo = ganancias.children[2].value;
let precioFinal = ((valor * 1.50)/kilo);
console.log( "Tu precio al publico es: $" + precioFinal );

if (precioFinal>0){
let tuPrecio = document.getElementsByTagName('h3')[2]
tuPrecio.textContent = "Tu precio al publico es: $" + precioFinal

}
}
////////////////////////////////////////////////
let miLista = document.getElementById('listaDeClientes')
miLista.addEventListener("submit", agregarCliente)

function agregarCliente(e){
  e.preventDefault();
  let lista = e.target


console.log (lista.children[0].value )
console.log (lista.children[1].value,)
console.log (lista.children[2].value,)
console.log (lista.children[3].value,)

let datosCompletos = [ lista.children[0].value, lista.children[1].value, lista.children[2].value, lista.children[3].value]

let nombre = lista.children[0].value
let tuNombre = document.getElementsByTagName("h3")[3]
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
///////////////////////////////////////





