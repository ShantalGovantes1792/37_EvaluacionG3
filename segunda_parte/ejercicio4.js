/*
EJERCICIO 4
Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de
JavaScript:
● Objeto Persona con las propiedades nombre, edad y género, y el
método obtDetalles(), que muestra por pantalla las propiedades
de la persona.
● Objeto Estudiante, que hereda de Persona, e incluye las
propiedades curso y grupo y el método registrar().
● Objeto Profesor, que hereda de Persona, e incluye las
propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el
correcto funcionamiento de la jerarquía.
*/

// OBJETO PERSONA

var Persona = {
	"nombre" : "Javier",
	"edad" : 21 ,
	"genero" : "Masculino"
};
var objDetalles = Persona("nombre"+"edad");
alert(objDetalles);

function metodoRegistro(Persona, Estudiante, Profesor) {
	this.Persona = Persona;
	this.Estudiante = Estudiante;
	this.Profesor = Profesor;

	}
};
var pepe = new Persona("pepe", 21, "masculino");
var pepeEstudiante = new Estudiante("noveno", 203);
var mauricio = new Profesor("matematicas", "avanzado")
alert(objDetalles.pepe);

// OBJETO ESTUDIANTE







// OBJETO PROFESOR