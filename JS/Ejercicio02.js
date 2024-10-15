// Tipos de Datos en JavaScript

// 1. Undefined: Se asigna automáticamente a variables que han sido declaradas pero no inicializadas.
console.warn("--- Tipo de Dato UNDEFINED");
let cliente;
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "Juan Romero"; // Inicialización con un string.
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = 19227; // Cambio de tipo de dato a número.
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas.

// 2. BOOLEAN: Representa dos valores posibles, true o false.
console.warn("--- Tipo de Dato: BOOLEAN (Boleano - True/False)");
let esPremium = "No lo sé"; // Declaración inicial como string.
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor \"true\" a la variable.");
esPremium = "true"; // Ahora es un string, pero su valor indica booleano.
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable.");
esPremium = true; // Asignación como valor booleano.
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿Es el cliente Premium? : ${esPremium}`);

console.log("Cambiando el valor de esPremium a false");
esPremium = 0; // Asignación de un valor falso.
if (esPremium)
    console.log("El cliente pagó por usar el servicio.");
else
    console.log("El cliente recibe los servicios gratuitos.");

// 3. NUMBER: Representa tanto números enteros como decimales.
var cantidad;
const costo_producto = 10.50; // Número decimal.
let saldo_cuenta = -2500.40; // Números negativos.
let monto_transaccion;

console.warn("--- Tipo de Dato - NUMBER (Números: enteros, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta},  (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
cantidad = 8;
console.log(`Has elegido comprar:  ${cantidad} productos.`);
console.log(`El importe total de la compra es: ${(cantidad * costo_producto)}`);
saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

// El cliente realiza un abono de 1500
monto_transaccion = 1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta + monto_transaccion)}`);

// 4. STRING (Cadena de Caracteres): Almacena texto.
const alumno = "José Francisco Flores Amador";
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caracteres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);
producto = "MONITOR 20\"";
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

// Manipulación de cadenas de texto (strings)
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones específicas como convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);

// 5. BIGINT: Utilizado para representar enteros muy grandes.
console.warn("--- Tipo de Dato - BIGINT (Número Amplio)");
let numeroGrande = 1234567890;
let numeroGrande2 = 12345678901234567890;
let numeroGrande3 = 12345678901234567890123456789;
let numeroGrande4 = 123456789012345678901234567891234567890;

console.log(`El primer experimento de un número grande es: ${numeroGrande}, soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El segundo número grande es: ${numeroGrande2}, soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El tercer número grande es: ${numeroGrande3}, soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El cuarto número grande es: ${numeroGrande4}, soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande4)}`);

// Para definir el tipo de dato BigInt debemos usar BigInt() o la letra "n" al final del número.
console.warn("--Declaramos los valores numéricos en gran tamaño--");
numeroGrande = BigInt(5422021172919176764511184);
numeroGrande4 = 5422021172919176764511184n;
console.log(`El primer número grande es: ${numeroGrande}, tipo de dato: ${typeof(numeroGrande)}`);
console.log(`El cuarto número grande es: ${numeroGrande4}, tipo de dato: ${typeof(numeroGrande4)}`);

// 6. SYMBOL: Representa un valor único.
console.warn("--Tipo de Dato: SYMBOL--");
const numero1 = "2";
const numero2 = "2.0";
const numero3 = "2";
const numero4 = "2.0";
const numero5 = Symbol(2);
const numero6 = Symbol(2.0);
const numero7 = Symbol("2");
const numero8 = Symbol("2.0");

console.log("Prueba de comparación 1");
if (numero1 == numero2) {
    console.log(`Se han comparado los valores de numero1 y numero2, confirmo que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores de numero1 y numero2, detectando que no tienen el mismo valor.`);
}

console.log("Prueba de comparación 2: ¿Es 2 = 2?");
if (numero1 == numero3) {
    console.log(`Se han comparado los valores de numero1 y numero3, confirmo que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores de numero1 y numero3, detectando que no tienen el mismo valor.`);
}

// Comparación estricta (===).
console.log("Prueba de comparación 3: ¿Es 2 === 2?");
if (numero1 === numero3) {
    console.log(`Se han comparado los valores de numero1 y numero3, confirmo que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores de numero1 y numero3, detectando que no tienen el mismo valor.`);
}

// 7. Null: Representa la ausencia intencional de cualquier valor.
console.warn("-- Tipo de Dato: NULL (Nulo o Vacío)");
// A diferencia de Undefined, Null es un valor asignado de forma consciente.
let nombreUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacioneSentimental = null;
let fecha_ultimoPost = undefined;

console.log(`El usuario: ${nombreUsuario} está intentando iniciar sesión con la contraseña: ${passUsuario}`);

// El sistema actualizaría los datos al iniciar sesión correctamente.
generoUsuario = "M";
estatusRelacioneSentimental = null;
console.log(`El usuario ${nombreUsuario} ha iniciado sesión. Podemos deducir que su género es: ${generoUsuario}, su estatus de relación es: ${estatusRelacioneSentimental}, y su última publicación fue el: ${fecha_ultimoPost}`);

// Comparación entre Undefined y Null.
console.log("Comparación de igualdad entre Undefined y Null:");
console.log(
    fecha_ultimoPost == estatusRelacioneSentimental
        ? "Ambas variables tienen el mismo valor."
        : "Las variables no tienen el mismo valor."
);
console.log("Comparación estricta entre Undefined y Null:");
console.log(
    fecha_ultimoPost === estatusRelacioneSentimental
        ? "Ambas variables tienen el mismo valor y el mismo tipo de dato."
        : "Las variables no tienen el mismo valor ni el mismo tipo de dato."
);

// 8. FUNCTION: Representa una función.
console.warn("--- Tipo de Dato FUNCTION (Función)");
const saludar = function(nombre) { return `Hola, ${nombre}!`; };

// Invocamos la función declarada.
console.log(saludar("Paco"));

// Tipo de dato de la función.
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`);