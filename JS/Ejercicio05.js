//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(10,35,105,1) 0%, rgba(60,105,180,1) 33%, rgba(90,155,225,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;



//Personalización de las salidas a consola

console.warn("Práctica 07: Repaso de Ciclos y sentencias de control ")

console.log("%c1.- Si/Entoces ... (IF)", style_console)

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso 
let fechaActual=new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`)

//Y si la necesitamos en formato local(?)

const fechaLocalMX= fechaActual.toLocaleString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

console.log(`en formato local (México): ${fechaLocalMX}`)

//Si es antes de las doce saluda con buenos días

if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es ${fechaLocalMX}`)

//Existe un extensor de la sentencia if(Sí) que es else (En Caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año`)
else
    console.log(`Estas en la segunda mitad del año.`)


//que pasa si la validación tiene varias operaciones 
const anio=fechaActual.getFullYear();
let inicioPrimavera=new Date(anio, 2, 21);
let inicioVerano=new Date(anio, 5, 21);
let inicioOtonio=new Date(anio, 8, 23);
let inicioInvierno=new Date(anio, 11, 21);
let estacion;
let horarioVerano=false;

if(fechaActual>=inicioPrimavera && fechaActual<inicioVerano){
    console.log(`Estamos en PRIMAVERA`);
    console.log("Inicia la floración de muchas plantas.")
    console.log("Los días son más largos y las noches más cortas.")
    console.log("Muchos animales despiertan de la hibernación.")
    estacion="Primavera";
    horarioVerano=true;
} else if(fechaActual>=inicioVerano&&fechaActual<inicioOtonio){
    console.log("Estamos en VERANO");
    console.log("En esta temporada abundan los días soleados y calurosos.")
    console.log("En esta temporada el índice de turismo vacacional sube.")
    console.log("Mucha gente busca realizar actividades al aire.")
    estacion="Verano";
    horarioVerano=true;
}else if(fechaActual>=inicioOtonio&&fechaActual<inicioInvierno){
    console.log("Estamos en OTOÑO")
    console.log("Los árboles suelen cambiar de follaje.")
    console.log("Se registrarán temperaturas más templadas.")
    console.log("Los animales comienzan con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran.")
    estacion="Otoño";
    horarioVerano=false;
} else {
    console.log("Estamos en INVIERNO")
    console.log("En esta temporada los días son más cortos y las noches más largas.")
    console.log("En algunas regiones suele nevar.")
    console.log("Dado las bajas temperaturas, se recomienda abrigarse.")
    estacion="Invierno";
    horarioVerano=false;
}



console.log("%c2.- Operador Ternario (validación?cumple:no_cumple)", style_console);
//En JavaScript existe una operación simplificada que valida si una condición se cumple o no, y que hacer en cada caso.

const edadPersona=18;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;
let evaluarMayoriaEdad=(edad)=>
    edad>=18?"Eres mayor de edad.":"No eres mayor de edad."

console.log("Evaluando la mayoría de edad de una persona: ");
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo parámetro en la evaluación.

evaluarMayoriaEdad=(edad, pais)=>
    (edad>=18 && pais=="MX")?`En ${pais} eres mayor de edad.`:`En ${pais} NO eres mayor de edad.`


console.log("Evaluando la mayoría de edad de una persona en Estados Unidos")
console.log(evaluarMayoriaEdad(edadPersona, "USA"))

console.log("Evaluando la mayoría de edad de una persona en Estados Unidos")
console.log(evaluarMayoriaEdad(edadPersona, "MX"))



console.log("%c3.- SWITCH - CASE (Elección por valor definido)", style_console);

//Calculando tu generación en base a tu edad
let anioNacimiento;
let asignaGeneracion=(anioNacimiento)=>{

    switch(true){
        case(anioNacimiento<1968):
        return "Baby Boomer";

        case(anioNacimiento>1968 && anioNacimiento<=1980):
        return "Generación X";

        case(anioNacimiento>1980 && anioNacimiento<=1994):
        return "Generación Y/Millennial";

        case(anioNacimiento>1994 && anioNacimiento<=2009):
        return "Generación Z/Centennial";

        case(anioNacimiento>2009):
        return "Genración Alfa";
    }
}

console.log(`Dado que nací en el año 2005 soy de la generación ${asignaGeneracion(2005)}`)


console.log("%c4.- Manejo de Escepciones (TRY/ CATCH)", style_console);


//En algunos ocasiones existiran errores que no son culpa del programa, si no del usuario, la red, el so o incluso de un middleware, pero que si duda debemos controlar para evitar las fallas de ejecución.


console.log("Initentamos dividir : 0/10, el resultado es: ")
try{
    let result= 0/10;
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}


console.log("Initentamos dividir : 10/0, el resultado es: ")
try{
    let result= 10/0;
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Initentamos dividir : a/0, el resultado es: ")
try{ //intentamos
    let result= "a"/0; //dividir una letra entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}


console.log("Initentamos dividir : la variable a/0, el resultado es: ")
try{ //intentamos
    let result= a/0; //dividir una variable no definida 
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Initentamos dividir : el valor de la variable x/ entre el valor de la variable y, el resultado es:")
try{ //intentamos
    let x=8, y=2, result=x/y; //dividir una variable no definida 
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("%c5.- Control de Ciclos (BREAK/ CONTINUE))", style_console);

//En algunas ocasiones será importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo...

console.log("Vamos a contar del 1 al 10...")
for(let num=1; num<11; num++){
    console.log(num);
}
console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte...")
for(num=1; num<11; num++){
    if(num==7)
        break;
    else
        console.log(num);
}
console.log("Ahora necesitamos que si llega al 7 te saltes ese numero y continues")
for(num=1; num<11; num++){
    if(num==7)
        continue;
        console.log(num);
}
console.log("%c6.- Ciclo Iterativo - (FOR))", style_console);

//Recorre de manera iterativa (i), de incremental o decremental

console.log("Los días de la semana son en ordenes ascendentes son: ")
let dias= ["Domingo","Lunes","Martes","Miércoles", "Jueves", "viernes","Sábado"]

for(let i=0; i<dias.length; i++){
    console.log(dias[i])
}
console.log("Ahora vamos a imprimir los meses en orden descendente...")
const meses=["Enero","Febrero","Marzo", "Abril", "Mayo", "Junio","Julio","Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"]

for(let i=11; i>=0; i--){
    console.log(meses[i]);
}


console.log("%c7.- Ciclo Condicionales - (WHILE))", style_console);
//Estos ciclos (BUCLE) depende de una condición para continuar ejecutandose 
let finDeSemana= false;
let j=0;
let mensaje= " ";
while(j<dias.length){    
    //let diaHabil= dias[i];
        switch(j) //Usamos "j" para que coincide con los casos
        {
            case 0:
                finDeSemana=true
                mensaje="Domingo Perezozo"
                break;
            case 1:
                finDeSemana=false;
                mensaje="Lunes casi viernes , ANIMOS!!!"
                break;
            case 2:
                finDeSemana=false
                mensaje="Martes de comer Tacos dorados"
                break;
            case 3:
                finDeSemana=false
                mensaje="Miercoles casi VIERNES"
                break;
            case 4:
                finDeSemana=false;
                mensaje="Ultimo día que veoa mi noviecita en la escuela c,:"
                break;
            case 5:
                finDeSemana=false
                mensaje="Viernes ya no veo a mi noviecita  :(("
                break;
            case 6:
                finDeSemana=true
                mensaje="Sábado, diviértete"
                break;
        }

    if(!finDeSemana){
        console.log(`Día: ${j} ${dias[j]}`)
        console.log(`Mensaje del día ${mensaje}`)
    }
    j++;
}
console.log("%c8.- Ciclo Condicionales , que se ejecuten al menos una vez -(DOWHILE)",style_console)
let episodios = [
  " Episodio 1 : Buscando las Semillas",
  " Episodio 2 : Invasión Canina ",
  " Episodio 3 : Parque Anatomico",
  " Episodio 4 : La Simulación Alienígena",
  " Episodio 5 : Meseeks Destructores"
];

let indice = 0;
let continuarViendo = true; //Esta variable simula la desicion del usuario de continuar viendo

do{
  console.log(`Reproduciendo ${episodios[indice]}`);
  //Simulamos la reprodución del episodio
  indice++;

  //Simulamos una pregunta al usuario si desea seguir viendo
  if(indice<episodios.length){
    continuarViendo=confirm("Deseas continuar con el siguiente episodio?");
  }else{
    continuarViendo=false;//Cuando se acaba la lista de episodios
  }
}while(continuarViendo && indice < episodios.length);

console.log("Fin de la reproduccion");
//El WHILE primero evalua y luego ejecuta y el DOWHILE se repite mientras que se cumple una determinada condición
console.log("%c9.- Ciclo para recorrer elementos finitos - (FOR ... OF))",style_console);

let seriesTrending = [
  { nombre : "Rick y Morty",temporadas:7,totalViewers:"3.0M",totalReprods:"30M"},
  { nombre : "One Ponch Man",temporadas:2,totalViewers:"2.0M",totalReprods:"3M"},
  { nombre : "La Historia de Jeffry Dhamer",temporadas:1,totalViewers:"3.0M",totalReprods:"2.5M"},
  { nombre : "Estamos Muertos",temporadas:1,totalViewers:"3.5M",totalReprods:"1M"},
  { nombre : "Un Show Mas",temporadas:8,totalViewers:"4.0M",totalReprods:"10M"}
];
//Usando for..of para recorrer la lista
for(let serie of seriesTrending){
  console.log(`Serie: ${serie.nombre}, Temporadas : ${serie.temporadas}`);
}
//console.log(`La ultima serie leida fué ${sere.nombre}`);

console.log("%c10.- Ciclos para recorrer las propiedades de elementos finitos-(FOR...IN)",style_console)

//Usando for...in para recorrer cada serie
for(let i in seriesTrending){
  console.log(`Serie${parseInt(i)+1}:`);
  for(let propiedad in seriesTrending[i]){
    console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
  }
  console.log(`---------------------`)
}

console.log("%c11.-Ciclos interrumpidos para cada uno de los elementos del arreglo (FOR EACH)",style_console)

//Lista de series de TV trending con temporadas , viewers y reproducciones
let seriesTrending2= [
  { nombre : "Rick y Morty",temporadas:7,totalViewers:"800000",totalReprods:"12000"},
  { nombre : "One Ponch Man",temporadas:2,totalViewers:"90000",totalReprods:"220000"},
  { nombre : "La historia de Jeffry Dhamer",temporadas:3,totalViewers:"150000",totalReprods:"252000"},
  { nombre : "Estamos Muertos",temporadas:1,totalViewers:"80000",totalReprods:"250000"},
  { nombre : "Un Show Mas",temporadas:3,totalViewers:"7000",totalReprods:"50000"},
];

//Usando FOR..HEACH para recorrer cada serie y calculcar su calificación
seriesTrending2.forEach((serie,index)=>{
  let calificación = (serie.totalReprods/serie.totalViewers).toFixed(2);
  //Calcula la calificación y la redondea a 2 a decimales
  console.log(`Serie ${index+1}:`);
  console.log(`Nombre ${serie.nombre}:`);
  console.log(`Vistas ${serie.totalViewers}:`)
  console.log(`Reproduciones ${serie.totalViewers}:`)
  console.log(`Calificacion ${calificación}:`)
  console.log(`---------------------`)
}
)

let seriesDeseadas = ["Rick y Morty","One Ponch Man","Un Show Mas"];

let seriesConTresTemporadas = seriesTrending2
    .filter(serie=> serie.temporadas <=3)//Filatramos las series que teienen 3 temporadas
    .map(serie=> serie.nombre)//Obtenemos solo los nombres de esas series estan en la lista de series deseadas
    .filter(nombre=> seriesDeseadas.includes(nombre));//Filtramos las que estan en la lista de series deseadas

//Mostramos los resultados
console.log("Series con 3 temporadas que estan en la lista deseada: ")
console.log(seriesConTresTemporadas);