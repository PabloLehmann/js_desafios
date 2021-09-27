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
console.log(clientes)
let nuevoCliente=prompt("quiere agregar un cliente. si/no")
if(nuevoCliente == "si"){
clientes.push({
    nombre: prompt("Ingrese su nombre y apellido"),
    direccion: prompt("Ingrese su direccion"),
    telefono: parseInt(prompt("Ingrese su telefono")),
})
}else{
    alert("No se agrego ningun cliente")
}
console.log(clientes)


