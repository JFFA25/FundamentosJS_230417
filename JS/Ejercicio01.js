 // Comentarios de una sola linea

 /*
 Comentarios multilinea
 */
 
 //Ejercicio 01: Declaración de variables

 // a) Var
 var miNombre = "Jose Franciso"
 var misApelldos;
 var miEdad = 19
 // El objetivo de console nos permite enviar datos a la terminal y poder vusualizar el valor de una variable o resultado de una funcion o metodo

 console.log("Intentando leer variables: ",miNombre,misApelldos);
 misApelldos = "Flores Amador"
 console.log("Ya que ambas fueron inicializadas , vuleve a intentar lerlas:  ",miNombre,misApelldos);

 // Una variable puede cambiar en el proceso de ejecución del programa
 
 // b) Const


 console.warn("-------Declaracion de variabes del tipo constante usando : CONST");
 const miUniversidad = "UT Xicotepec";
 const miMatricula = 230417
 console.log("Hola", miNombre,"",misApelldos, "se que estudias actualmente en: ",miUniversidad," Teasignaron matricula : ",miMatricula, "Y tienes una edad de :", miEdad) ;

 // Para saber el tipo de dato que tiene una variable o constante podemos utilizar la funcion typeof()
 console.log("Analizando los datos puedo deducir que: ")
 console.log("miNombre es del tipo: ",typeof(miNombre))
 console.log("misApellidos es del tipo:",typeof(misApelldos))
 console.log("miEdad es del tipo: ",typeof(miEdad))
 console.log("miMatricula es del tipo: ",typeof(miMatricula))

 // c) LET
 let miFechaNacimiento = "2005-08-11";
 let miColorFavorito;
let hola;
 console.warn("---Declaracion de Variables Locales usando : LET")
console.log("Genial , Ya te voy conociendo mejor , ahora se que tu naciste el",miFechaNacimiento, "Y tu color favorito es mmmmm dejame pensar .....");
 miColorFavorito = "Azul";
console.log(`Creo que es ${miColorFavorito}, le atine?`); // La manera de mezclar textos fijos con el valor actual de las variables se le conoce como interpolacion y deben iniciar y finalizar on un backtic - tilde inversa
console.log("miFechaNacimiento es de tipo:",typeof(miFechaNacimiento))
console.log("miColorFavorito es de tipo:",typeof(miColorFavorito))