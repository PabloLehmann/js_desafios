const parrafo = $('#parrafo')
parrafo.html('<h2>Ingresar mercaderia a stock?</h2>')
///////////////////////////

$('#boton').on('click', ()=> {

$("body").append(`<form id="myForm">
                       <input type="text" id="mercaderia" >
                       <input type="number" id="kilos">
                       <input type="submit" id= "boton2">
                   </form>`);

$("#boton2").on("click", (e) => {
    e.preventDefault();
    let mercaderia = $("#mercaderia").val()
    let kilos = $("#kilos").val()
    const nombreStock = $("#nombreStock")
    nombreStock.html("La mercaderia ingresada a stok es: "+mercaderia + " con la cantidad de kilos de : " + kilos);
    
});

})