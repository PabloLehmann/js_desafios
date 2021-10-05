/* function porcentajeDeMercaderia(pPregunta){
    let n1 = prompt(pPregunta);
    let n2 = parseInt(n1);
    return n2;
}
var monto = porcentajeDeMercaderia ("Ingrese el valor de la mercaderia");
var kilos = porcentajeDeMercaderia ("Ingrese el kilaje de la mercaderia");
var precio= ((monto/2) + monto)/kilos;
alert("Este es el precio: $" + precio + " para el publico") */



/* var monto = document.getElementById("mercaderia")
var kilos = porcentajeDeMercaderia ("Ingrese el kilaje de la mercaderia");
var precio= ((monto/2) + monto)/kilos;
alert("Este es el precio: $" + precio + " para el publico") */

/* const pregunt1= prompt("Ingrese el valor")
const preg1= document.getElementsByTagName('h3')

preg1.texContent= prompt("Ingrese el valor")
 */

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

const titulo= document.getElementsByTagName("h1")[0]
titulo.textContent= "Verduleria virtual"

const preg1= document.getElementsByTagName("h3")[0]
preg1.textContent= "Ingrese el valor de la mercaderia"

const preg2 = document.getElementsByTagName('h3')[1]
preg2.textContent = "Ingrese el peso neto de la mercaderia"

const tituloVerdura = document.getElementsByTagName('h2')[0]
tituloVerdura.textContent = "Lista de verduras"
prompt("Ingrese lista de verduras")

let listaMercaderia = document.getElementsByTagName('li')
for(let li of listaMercaderia){
  li.textContent =  prompt( "Ingrese la mercaderia")

    console.log( li)
}

//////////////////////////////////////////////////////////////

/* const input = document.getElementById('input')
input.textContent = 
 console.log(input.value) */
/*
const pokemones = ["pikachu", "charmander", "bulbasaur", "squirtle", "charizard", "evee", "raichu", "snorlax"]
 */
/* const select = document.getElementById('pokemon')

pokemones.forEach( (pokemon) => {
    const option = document.createElement('option')
    option.value = pokemon
    option.innerHTML = pokemon

    select.appendChild(option)
}) */


