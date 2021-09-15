function porcentajeDeMercaderia(pPregunta){
    let n1 = prompt(pPregunta);
    let n2 = parseInt(n1);
    return n2;
}
var monto = porcentajeDeMercaderia ("Ingrese el valor de la mercaderia");
var kilos = porcentajeDeMercaderia ("Ingrese el kilaje de la mercaderia");
var precio= ((monto/2) + monto)/kilos;
alert("Este es el precio: $" + precio + " para el publico")