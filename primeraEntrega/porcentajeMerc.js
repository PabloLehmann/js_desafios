function porcentajeDeMercaderia(pPregunta){
    let n1 = parseInt(prompt(pPregunta));
    return n1;
}
var monto = porcentajeDeMercaderia ("Ingrese el valor de la mercaderia");
var kilos = porcentajeDeMercaderia ("Ingrese el kilaje de la mercaderia");
var precio= ((monto/2) + monto)/kilos;
alert("Este es el precio: $" + precio + " para el publico");
var iva = prompt ("deseas agregarle el IVA a la mercaderia? SI/NO");
if (iva == "SI"){
    var ivaAgreg = precio * 1.21;
    alert("El precio con el iva agregado es: " + ivaAgreg);
}else{
    alert("Ok");
}