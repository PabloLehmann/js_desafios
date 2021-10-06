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

let miGanancia = document.getElementById("ganancia")
miGanancia.addEventListener("submit", agregarGanancia)

function agregarGanancia(a){

a.preventDefault();

let ganancias = a.target

console.log(ganancias.children[0].value); 
console.log(ganancias.children[1].value);  

let valor = ganancias.children[0].value;
let kilo = ganancias.children[1].value;
let precioFinal = ((valor * 1.50)/kilo);
console.log( "Tu precio al publico es: $" + precioFinal);

if (precioFinal>0){
let tuPrecio = document.getElementsByTagName('h3')[2]
tuPrecio.textContent = "Tu precio al publico es: $" + precioFinal

}
}