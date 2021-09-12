//desafío 3 Estructura.
/* var año = 2021;
var edad = parseInt(prompt("Dime tu edad y te diré en que año naciste!"));
for (let i=2021; i= edad; i--){
    var año = año - edad
    alert("Naciste en el año: " + año)
    break;
} */
//////////////////////////////////////////
var texto=" " ;
var introducirTexto = " ";
while (introducirTexto !== "ESC"){
  introducirTexto=  prompt("Introduce una palabra")
  texto += " " + introducirTexto;
  console.log (texto)
}
///////////////////////////////////////////
var multiplo = parseInt(prompt("Quieres saber que numero es multiplo de 7"))
if (multiplo % 7==0){
    console.log(multiplo + " es multiplo de 7")
}else{
    console.log(multiplo + " no es multiplo de 7")
}
//////////////////////////////////////////////
var tablas= parseInt(prompt("Que tabla deseas ver"))
for (let i=0; i<=30; i++){
    console.log( tablas + " * " + i + " = " + tablas*i)
}