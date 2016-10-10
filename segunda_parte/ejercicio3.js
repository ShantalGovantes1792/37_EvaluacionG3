/*
EJERCICIO 3
Definir una función que determine si la cadena de texto que se le pasa
como parámetro es un palíndromo, es decir, si se lee de la misma forma
desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
"La ruta nos aporto otro paso natural".
*/

function palindromo(palabra) {
	var frase = prompt("ingresa la frase para verificar si es un palindromo");
	var frase = frase.replace(/ \s / g" " );
	for (var i = 0; i < frase.length; i++) {
		if (frase[i] === frase [frase.length-(i+1)]){
			return true;
	}
}	