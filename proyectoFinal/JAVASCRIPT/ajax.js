let url = 'https://jsonplaceholder.typicode.com/posts'

$.get (url,(response, data)=>{

    console.log(response);

})

$.get ("./stock.json", (resp)=>{
    console.log(resp);

    resp.forEach((mercaderia) => {
        $("#stock").append(`
        <li>
        <h3>id: ${mercaderia.id}</h3>
        <h3>nombre: ${mercaderia.nombre}</h3>
        <h3>tipo: ${mercaderia.tipo}</h3>
        <h3>precio: ${mercaderia.precio}</h3>
        </li>
        
        
        `)
        
    });
})
///////////////////////////////
$('#fadein-2').click (()=>{
    $('#listaStock').fadeIn(1000)
    })
    $('#fadeout-2').click (()=>{
        $('#listaStock').fadeOut(1000)
    })