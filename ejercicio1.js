// Ejercicio 1: 
// Haz el juego de piedra papel o tijera con 3 turnos:

var user1 = prompt( "jugador 1"+ "escoge piedra, papel o tijera");
var user2 = prompt( "jugador 2" + "escoge piedra, papel o tijera");

if ( (user1 == "papel") !== (user2 == "piedra") ) {
	alert("empate");
}else{
	alert("gana papel");
};

if ( (user1 == "tijera") !== (user2 == "papel") ) {
	alert("empate");
}else{
	alert("gana tijera");
};

if ( (user1 == "piedra") !== (user2 == "tijera") ) {
	alert("empate");
}else{
	alert("gana piedra");
};











/*
if (papel > piedra ){
	alert("gana papel");
}else( papel == piedra){
	alert("empate");
}else{
	alert("pierde piedra");
};
*/

/*
var user1 = prompt( "jugador 1"+ "escoge papel o tijera");
var user2 = prompt( "jugador 2" + "escoge piedra, papel o tijera");

if ( user1 > user2)  {
	alert("gana papel");
} else if ( user1 < user2){
	alert("gana piedra");
}else{
	alert("empate");
};
*/