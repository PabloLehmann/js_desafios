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

