
/*alert ("Bienvenido al Simulador de prestamos");
alert ("Empecemos!")

let nombre = (prompt("Ingrese su nombre"));
let Apellido =(prompt("Ingrese su apellido"));
let Edad = Number((prompt("ingrese su edad")));


while (Edad < 18) {
alert("Muchas gracias " +  nombre + " "+ Apellido + ", pero para avanzar es necesairo que sea mayor de edad")
    Edad = Number(prompt ("Ingrese su edad"));    
}

while (Edad > 80) {
    alert("Muchas gracias " +  nombre + " "+ Apellido + ", lamentablemente debido a su edad no estamos autorizados a continuar")
        Edad = Number(prompt ("Ingrese su edad"));    
    }

let dni =Number((prompt("Ingrese su número de DNI sin puntos")));
let Sueldo = Number((prompt(`Ingrese el valor de su úlitmo sueldo neto mensual:
Ejemplo: 210.000 (sin signos y sin decimales)`)));

let prestamo_maximo = Sueldo * 3;

let prestamo = Number((prompt (`Indique el importe que desea
Ejemplo: 500.000 (sin signos y sin decimales)`)));

while (prestamo>prestamo_maximo) {
    alert("Muchas gracias " +  nombre + " "+ Apellido + ", no es posible otorgarle el importe solicitado, por favor intente nuevamente con un importe menor")
    prestamo = Number((prompt (`Indique el importe que desea
    Ejemplo: 500.000 (sin signos y sin decimales)`)));
}

let forma_de_pago =(prompt(`Indique la forma de pago
1: Pago Diario
2: Pago Quincenal
3: Pago Mensual`));

let tiempo_de_devolucion =Number((prompt(`Indique la cantidad de meses en que desea devolverlo.
(Ingrese solo el número).
Ejemplo: 6`)));

let TNA1 = 150;
let TNA2 = 180;
let TNA3 = 200;


function calculadora (prestamo, TNA1, TNA2, TNA3, forma_de_pago, tiempo_de_devolucion) {
    switch (forma_de_pago) {
        case "1":
            alert ("Muchas gracias " + nombre + " " + Apellido + " por el préstamo solicitado de: "+ prestamo  +" su cuota diaria sería de: $ " + ((((prestamo * TNA1/100 )/12)* tiempo_de_devolucion) + prestamo )/ (tiempo_de_devolucion*30))
            break;
        case "2":
            alert ("Muchas gracias " + nombre + " " + Apellido + " por el préstamo solicitado de: "+ prestamo  +" su cuota quincenal sería de: $ " + ((((prestamo * TNA2/100 )/12)* tiempo_de_devolucion) + prestamo )/ (tiempo_de_devolucion*2))
            break;
        case "3":
            alert ("Muchas gracias " + nombre + " " + Apellido + " por el préstamo solicitado de: "+ prestamo  +" su cuota mensual sería de: $ " + ((((prestamo * TNA3/100 )/12)* tiempo_de_devolucion) + prestamo )/ (tiempo_de_devolucion))
            break;
        default:
            return 0;
            break;
    }
}

calculadora (prestamo, TNA1, TNA2, TNA3, forma_de_pago, tiempo_de_devolucion)


function Productos(nombreP, objetivo, ID) {
    this.nombreP = nombreP;
    this.objetivo = objetivo;
    this.ID = ID;
    this.disponible = function () {
        alert ("Préstamo de " + this.nombreP + " para " + this.objetivo)
    }  
}

const producto_prestamo1 = new Productos("Movilidad", "Compra de auto y/o moto", 150)
const producto_prestamo2 = new Productos("Reformas", "Arreglos en general para el hogar", 180)
const producto_prestamo3 = new Productos("Viajes", "Viajes en avion y/o bus", 200)
const producto_prestamo4 = new Productos("Libre", "Destino libre", 220)
const producto_seguro1 = new Productos("Seguro vida", "Asegura el pago de la deuda en caso de fallecimiento", 100)
const producto_seguro2 = new Productos("Seguro desempleo", "Asegura el pago de 6 cuotas seguidas antes eventual despido", 300)

let total_productos = [producto_prestamo1, producto_prestamo2, producto_prestamo3, producto_prestamo4,producto_seguro1, producto_seguro2]

alert ("Antes de decidir si toma el préstamo o no, sepa que tenemos benefecios en ...")
   producto_prestamo1.disponible()
   producto_prestamo2.disponible()

let mensaje_cierre = prompt ("Quiere aprovecharlos? Ingrese : SI/NO");

if (mensaje_cierre == "si" || mensaje_cierre == "SI") {
   alert ("Perfecto! en Breve lo contactaremos y le contaremos todos los beneficios")
     
} else {
      alert ("Muchas gracias por su interés, vuelva pronto.")
    
}
 */

//-----

/* Realice un filtrado del array que arme más arriba, todavía no lo utilizo en mi html. Funciona ok con console.log 

const filtrado = total_productos.find((p)=> p.ID === 300);

console.log(filtrado)*/

//hasta aca es la entrega anterior dejamos cómo backup

let nombre = document.querySelector("#inputname");
let Apellido = document.querySelector("#inputlastname");
let Edad = document.querySelector("#inputage");
let dni = document.querySelector("#inputid");
let correo = document.querySelector("#inputEmail");
let Sueldo = document.querySelector("#inputsalary");
let prestamo = document.querySelector("#inputloan");
let forma_de_pago = document.querySelector("#inputtimepay");
let tiempo_de_devolucion = document.querySelector("#inputtime");
let TNA1 = 150;
let TNA2 = 180;
let TNA3 = 200;


nombre.addEventListener("blur", function()
{
    if(nombre.value === ""){
        swal("Campo obligatorio");
    }
    const nombre_json = JSON.stringify(nombre.value)

//console.log(nombre_json)

localStorage.setItem("Nombre", nombre_json)
})

Edad.addEventListener("blur",(e)=> {
    if(Edad.value < "18"){
        swal("Atención!", "...para poder continuar debe ser mayor de edad!","error");
    }
    if(Edad.value > "80"){
        swal ("Lo sentimos!", "... lamentablemente por su edad no es posible continuar","error");
    }
})

Sueldo.addEventListener("blur", function()
{
  prestamo.addEventListener("blur", function() {
    
    if((prestamo.value)>(Sueldo.value*3)){
        swal (`Muchas gracias ${nombre.value}, no es posible otorgarle el importe solicitado. Por favor intente nuevamente con un importe menor`)
    }
  })
    
})



let formulario = document.querySelector("#formulario1")
let infosimulador = document.querySelector("#infosimulador")

const mostrarinfo = formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    infosimulador.innerHTML=`
    <div class="alert" role="alert">
    <h3> Muchas gracias ${nombre.value}, en breve te enviaremos a tu correo ${correo.value} el detalle de cómo quedaría tu prestamos soliciitado.</h3>
    <div class="container-fluid">
	<div class="row">
		<div class="col-md-6">
			<p>
				Importe solicitado:
			</p>
		</div>
		<div class="col-md-6">
			<p>
				${prestamo.value}
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
        <p>
			Forma de Pago:
		</p>
		</div>
		<div class="col-md-6">
            <p>
				${forma_de_pago.value}
			</p>
		</div>
	</div>
    <div class="row">
		<div class="col-md-6">
        <p>
			Plazo de devolución
		</p>
		</div>
		<div class="col-md-6">
            <p>
				${tiempo_de_devolucion.value}
			</p>
		</div>
	</div>
	</div>
</div>
</div>
<button class="btn btn-primary" onclick="reset();">Volver a simular</button>
    `
})
function reset(){
    location.reload();
}

const listausuarios = async ()=> {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users`);
    const usuarios = await response.json ();

    let tablebody = ``;
    
    usuarios.forEach((usuarios, index) => {
        tablebody += `
        <tr>
            <td>${usuarios.id}</td>
            <td>${usuarios.name}</td>
            <td>${usuarios.email}</td>
        </tr>`;
    })
    document.getElementById("tabla").innerHTML = tablebody;
};

window.addEventListener("load", function(){
    listausuarios();
})