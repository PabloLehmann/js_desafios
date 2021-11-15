const parrafo = $('#parrafo')
parrafo.html('<h2>Ingresar mercaderia a stock?</h2>')
///////////////////////////

$('#boton').on('click', ()=> {
$("#myForm").remove()
$("section").append(`<form id="myForm">
                       <input type="text" id="mercaderia" placeholder="Mercaderia">
                       <input type="number" id="kilos" placeholder="Ingrese el peso">
                       <input type="submit" id= "boton2">
                   </form>`);

$("#boton2").on("click", (e) => {
    e.preventDefault();
    let mercaderia = $("#mercaderia").val()
    let kilos = $("#kilos").val()
    const nombreStock = $("#nombreStock")
    nombreStock.html("")
    nombreStock.html("La mercaderia ingresada a stok es: "+mercaderia + " con la cantidad de kilos de : " + kilos);
    
});

})
//////////////////////////////////////////
