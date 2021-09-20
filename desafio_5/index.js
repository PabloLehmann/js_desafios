var mercaderia ={
    banana: "$180",
    manzanaRoja: "$170",
    manzanaVerde: "$150",
    pera: "$140",
    naranja: "$90",
    limon: "$10",
}

var ganancia = {
    precioCosto : parseInt(prompt("Ingrese el Precio de costo")),
    kiloNeto : parseInt(prompt("Ingrese el peso neto")),
    precio: function(){
        ((this.precioCosto/2) + this.precioCosto)/this.kiloNeto;

        }
    }

    class ingresoPrecioMerca {
        constructor(pBanana, pNaranja, pPera, pManzana, pPomelo) {
          this.banana = pBanana;
          this.naranja = pNaranja;
          this.pera = pPera;
          this.pomelo = pPomelo;
        }
      
      }
      
      var mercaderia = new ingresoPrecioMerca (180, 90, 140, 189, 110);
      console.log(mercaderia);
//agenda de usuario perdido por prompt
      var cliente = {
          nombre: "Maria Rosa Gutierrez",
          edad: 54,
          direccion: "los alamos 1243",
          numCelular: 2616125463,

      }