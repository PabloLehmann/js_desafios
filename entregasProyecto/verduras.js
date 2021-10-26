let verduras = [
    {id:1, nombre:papa, precio: 45},
    {id:2, nombre:camote, precio: 65},
    {id:3, nombre:zanahoria, precio: 60},
    {id:4, nombre:zapallo, precio: 80},
    
]





let papa = document.getElementById("papa")
papa.onclick = () =>{
    let papa1 = "Papa"
    localStorage.setItem("carrito-1", papa1)
    console.log(papa1)
}

let camote = document.getElementById("camote")
camote.onclick = () =>{
    let camote1 = "Camote"
    localStorage.setItem("carrito-2", camote1)
    console.log(camote1)
}
let zanahoria = document.getElementById("zanahoria")
zanahoria.onclick=()=>{
    let zanahoria1 = "zanahoria"
    localStorage.setItem("carrito-3", zanahoria1)
    console.log(zanahoria1);
}    
let zapallo = document.getElementById("zapallo")
zapallo.onclick=()=>{
    let zapallo1 = "zapallo"
    localStorage.setItem("carrito-4", zapallo1)
    console.log(zapallo1);
} 
let mercaderia= localStorage.getItem("carrito-3")

console.log(stockMercaderia);

    
