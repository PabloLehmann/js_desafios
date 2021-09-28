let clientes =[
    {
        nombre: "Irma Gonzalez",
        direccion:"La cunas 1243",
        telefono: 2614337685,
    },
    
    {
        nombre: "Elena Payares",
        direccion:"Canota plena 3452",
        telefono: 2616324152,
    },
   
    {
        nombre: "Laura Lola",
        direccion:"tulipan 34",
        telefono: 2616543487,
    }
]
let cliente1 = prompt ("Ingrese su nombre")
alert("Hola " + cliente1+ " nos alegra que te hayas comunicado con nosotros!!!" )
let nuevoCliente=prompt("Quieres ser cliente de FRUTTI GO?. si/no")
if(nuevoCliente == "si"){
clientes.push({
    nombre: cliente1,
    direccion: prompt("Ingrese su direccion"),
    telefono: parseInt(prompt("Ingrese su telefono")),
})
}else{
    alert("Gracias! Que tengas un gran día!!!")
    
}
let seccion = prompt("quieres ingresar a nuestra seccion de frutas y verduras? si/no")
if (seccion== "si"){
    alert("Ya estas en nuestra base de datos!! ingresa tus productos al carrito y te lo llevo a tu casa!")
    
}else{
    alert("Gracias! Que tengas un gran día!!!")
}

console.log(clientes)


