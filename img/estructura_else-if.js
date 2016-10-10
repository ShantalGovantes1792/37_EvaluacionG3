// Ejemplo estructura condicional else if 

var numero1 = prompt("dame un numero");
	numero1 = Number(numero1);

var numero2 = prompt("dame numero2");
	numero2 = Number(numero2);


if (numero1 > numero2) { 
	alert("es mayor");
} else if ( numero1 < numero2 ){ 
	alert("es menor");
} else { 
	alert("son iguales");
}