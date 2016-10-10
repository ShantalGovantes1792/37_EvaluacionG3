/*Ejercicio 2: 
Declara un arreglo vacío denominado nombres. 
Pide al usuario tres nombres y almacena esos nombres como elementos arreglo. A continuación muestra el contenido en un mensaje.*/

var nombres = [];

for (var i = 1; i <= 3; i++){
	nombre = prompt("ingresa un nombres");
	nombres.push(nombre);
}
alert("Los nombres que ingresaste fueron " + nombres);
