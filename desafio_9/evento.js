//////////////////////////////////////////////////////////////

const titulo= document.getElementsByTagName("h1")[0]
titulo.textContent= "Verduleria virtual"

const preg1= document.getElementsByTagName("h3")[0]
preg1.textContent= "Ingrese el valor de la mercaderia"

const preg2 = document.getElementsByTagName('h3')[1]
preg2.textContent = "e ingrese el peso neto de la mercaderia"

const tituloVerdura = document.getElementsByTagName('h2')[0]
tituloVerdura.textContent = "Lista de verduras"
prompt("Ingrese lista de verduras")

let listaMercaderia = document.getElementsByTagName('li')
for(let li of listaMercaderia){
  li.textContent =  prompt( "Ingrese la mercaderia")

    console.log( li)
}

//////////////////////////////////////////////////////////////
let frutas= ["banana", "manzana", "pera", "naranja", "mandarina"];

let miGanancia = document.getElementById("ganancia")
const select = document.getElementById('fruta')

frutas.forEach( (fruta) => {
    const option = document.createElement('option')
    option.value = fruta
    option.innerHTML = fruta

    select.appendChild(option)
})



////////////////////////////////////////////////////////////

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

function agregarCliente(b){
  b.preventDefault();
  let lista = b.target
}
let clientes =[
  {
      nombre: "Irma Gonzalez",
      direccion:"La cunas 1243",
      telefono: 2614337685,
  },
  
]
console.log(clientes)

clientes.push({
  nombre: lista.children[0].value,
  apellido: lista.children[1].value,
  direccion: lista.children[2].value,
  telefono: lista.children[3].value,
})
let nuevoC = document.getElementsByTagName('h3')[3]
nuevoC.textContent = clientes
console.log(clientes)
