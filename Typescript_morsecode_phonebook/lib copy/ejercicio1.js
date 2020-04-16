var mensaje = "hola a todos desde casa";
console.log(mensaje);
console.log("mensaje2");
var numero = 23;
var verdadero = true;
var nulo;
var indefinido;
var num3 = 2;
var numero2 = 22;
var resultado = numero + numero2;
console.log(resultado);
//Funciones
let num1 = 1;
function letSuma() {
    let num2 = 2;
    if (num1 > num2) {
        return "mayor";
    }
    num1++;
    return num1;
}
console.log("Resultado: " + letSuma());
console.log("Numero1: " + num1);
const pi = 3.1416;
let frutas = ["manzana", "pera", "mango"];
let verduras = ["brocoli", "chayote"];
let numeros = [1, 2, 3, "cuatro", true, "cinco"];
for (var indice in frutas) {
    console.log(frutas[indice]);
}
class Estudiante {
    constructor(aMaterno, aPaterno, nombreCompleto) {
        this.aMaterno = aMaterno;
        this.aPaterno = aPaterno;
        this.nombreCompleto = nombreCompleto;
        this.nombre = nombreCompleto + " " + aPaterno + " " + aMaterno;
    }
}
class Profesor {
    constructor(aMaterno, aPaterno) {
        this.aMaterno = aMaterno;
        this.aPaterno = aPaterno;
        this.clase = "El profe da la clase" + this.clase;
    }
}
function registro(persona) {
    return "se registra" + persona.aMaterno + " " + persona.aPaterno;
}
var juan = new Estudiante("Ballesteros", "Velez", "Juan");
var pr1 = new Profesor("ap1", "ap2");
