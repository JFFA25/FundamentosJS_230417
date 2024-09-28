// Tipos de Datos en JS

// 1. Undefined
console.warn("--- Tipo de Dato UNDEFIEND")
let cliente;
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "Juan Romero"
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = 19227
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

//console.log(`El cliente ha realizado ${NumCompras} en este mes.`);

// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

// 2. BOOLEAN
console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/ False")
let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium? : ${esPremium}`)
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor \"true\" a la variable. ")
esPremium="true"
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable. ")
esPremium=true
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);

console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando el valor de esPremium a false")
esPremium=0;

if(esPremium)
    console.log ("El cliente pago por usar el servicio.");
else 
    console.log ("El cliente que recibe los servicios gratuitos");

// 3. NUMBER

var cantidad;
const costo_producto = 10.50
let  saldo_cuenta = -2500.40
let monto_transaccion ;

console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimleas , flotantes");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta},  (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar:  ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta= saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// El cliente realiza un abono de 1500
monto_transaccion=1500;

console.log(`Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta+monto_transaccion)}`);
// 4.STRING (Cadena de Caractéres)
const alumno = "Jose Francisco Flores Amador"
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);
producto="MONITOR 20\"";
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

// Manipulando los STRINGS
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones específicas cómo convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);



// 5.BIGINT (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o espaciales donde se requiere de una excelente precisión numérica.
console.warn("--- Tipo de Dato - BIGINT (Número Ampplio");
let numeroGrande = 1234567890
let numeroGrande2 = 12345678901234567890
let numeroGrande3 = 12345678901234567890123456789
let numeroGrande4 = 123456789012345678901234567891234567890

console.log(`El primero experimento de un numero grandre es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`)
console.log(`El primero experimento de un numero grandre es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`)
console.log(`El primero experimento de un numero grandre es: ${numeroGrande3}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El primero experimento de un numero grandre es: ${numeroGrande4}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande4)}`)

// Para definir el tipo de dato BigInit debemos invocar la funcion BigInit o usar la letra "n" al final del numero o la asignacion de este

console.warn("--Declaramos los valores numericos en gran tamaño--")
numeroGrande = BigInt(5422021172919176764511184)
numeroGrande4 = 5422021172919176764511184n
console.log(`El primero experimento de un numero grandre es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`)
console.log(`El primero experimento de un numero grandre es: ${numeroGrande4}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande4)}`)

// 6. SYMBOL
console.warn("--Tipo de Dato : SYMBOL--")
const numero1 = "2";
const numero2 = "2.0";
const numero3 = "2";
const numero4 = "2.0";
const numero5 = Symbol(2);
const numero6 = Symbol(2.0);
const numero7 = Symbol("2");
const numero8 = Symbol("2.0");

console.log("Prueba de comparacion 1")
if (numero1==numero2){
    console.log(`Se han comparado los valores de numer1 y numero2, confirmo que tienen el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numer1 y numero2, detectando que No tienen el mismo valor`)
}
console.log("Prueba de comparacion 1 : ¿ es 2 = 2?")
if (numero1==numero3){
    console.log(`Se han comparado los valores de numer1 y numero2, confirmo que tienen el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numer1 y numero3, detectando que No tienen el mismo valor`)
}

// Prueba de comparacion 3 : ¿Es 2 = "3"?
console.log("Comparacion  3 : ¿Es 2 = 3")
if (numero1===numero3){
    console.log(`Se han comparado los valores de numer1 y numero3, confirmo que tienen el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numer1 y numero3, detectando que No tienen el mismo valor`)
}
// Prueba de comparacion 4 : ¿ es 2 = "4.0"?
console.log("Prueba de comparacion 4 : ¿ es 2 = 4.0")
if (numero4 === numero2){
    console.log(`Se han comparado los valores de numer1 y numero4, confirmo que tienen el mismo valor`)
}
else{
    console.log(`Se han comparado los valores de numer1 y numero4, detectando que No tienen el mismo valor`)
}
// Prueba de comparacion 5 : ¿
//console.log()
// 7. Null
console.warn("-- Tipo de Dato : NULL (Nulo o Vacio)")
// Este tipo de dato nulo se asigna cuando el sistema o el usuario sabe de la variabl
// pero prefiere dejarlo vacio , bajo su consentimiento , a diferenecia de la UNDEFINED que es un valor desconocido
// asignado por DEFAULT por JS.
let nombreUsuario = null
let passUsuario = null
let generoUsuario = null
let estatusRelacioneSentimental = null
let fecha_ultimoPost = undefined

/*Supongamos que estamos programando uns Red Social , tipo Facebook , en la que parte de la informacion
 se publicara en el perfil del usuario*/

 /*Si el usuario no ha iniciado sesion en el dispositivo movil o en la aplicacion web
  , puede explorar contenido de acceso publico . y no existiria informacion para mostrar */

  /*En la HU (Historias de Usuario) , que el usuario desea logearse deberan ingresar
  su numero telefonico o correo electronico y una contraseña que deberemos guardar en las variables
  previamente declaradas*/

  /*Supongamos que el usuario : José Francisco Flores Amador con correo electronico 230417@utxicotepec.edu.mx
  desea ingresar con con su contraseña : JOSEF11BN14*/
  console.log(`El usuario: ${nombreUsuario} esta intentando logearse con una contraseña ${passUsuario}`);

// Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos
//y en caso de que los datos sean correctos comenzara la sesion en la plataforma actualizando estos valores 


generoUsuario = "M"
estatusRelacioneSentimental = null
console.log(`El usuario: ${nombreUsuario} se ha logeado exitosamente ,al tener acceso a su informacion de perfil
    podemos deducir que es el generp ${generoUsuario} y que estatus de relacion es : ${estatusRelacioneSentimental} y se ultima publicacion
    se ha realizado el ${fecha_ultimoPost}`);

// NULL vs UNDEFINED

console.log("Comparacion de la Identidad ente Undefined y Null:")
console.log(
    (fecha_ultimoPost==estatusRelacioneSentimental)?
    "Ambas variables tienen el mismo valor y el mismo tipo de dato":
    "Las variables no tienen el mismo valor"
);
console.log("Comparacion de la Identidad ente Undefined y Null:")
console.log(
    (fecha_ultimoPost===estatusRelacioneSentimental)?
    "Ambas variables tienen el mismo valor y el mismo tipo de dato":
    "Las variables no tienen el mismo valor"
);

//8. FUNCTION (Funciones)
console.warn("--- Tipo de Dato FUNCTION (Funcion)")
const saludar = function(nombre){return `Hola,${nombre}!`}

//Invocamos a la funciondeclarada
console.log(saludar(`Paco`))

//Y que tipo de dato tiene la constante
console.log(`El Tipo de dato de la constante saludar e: ${typeof(saludar)}`)