var mensaje:string = "hola a todos desde casa";
console.log(mensaje);
console.log("mensaje2")
var numero: number = 23;
var verdadero: boolean = true;
var nulo: null;
var indefinido: undefined;
var num3: any=2;
var numero2 = 22;
var resultado = numero + numero2;
console.log(resultado)

//Funciones

let num1: number = 1;
function letSuma(){
    let num2: number = 2;
    if(num1>num2){
        return "mayor";
    }
    num1++;
    return num1;
}
console.log("Resultado: "+letSuma());
console.log("Numero1: "+ num1);

const pi = 3.1416;

let frutas:string[]=["manzana", "pera", "mango"];
let verduras: Array<string> = ["brocoli", "chayote"];
let numeros = [1,2,3,"cuatro",true,"cinco"];

for(var indice in frutas){
    console.log(frutas[indice]);
}

class Estudiante{
    nombre: string;
    constructor(public aMaterno, public aPaterno, public nombreCompleto:String){
        this.nombre = nombreCompleto + " "+ aPaterno + " " + aMaterno;
    }
}

class Profesor{
    clase: string;
    constructor(public aMaterno, public aPaterno){
        this.clase = "El profe da la clase" + this.clase;
    }
}

interface Persona{
    aMaterno: string;
    aPaterno: string;
}

function registro (persona: Persona){
    return "se registra" + persona.aMaterno + " "+ persona.aPaterno;
}

var juan = new Estudiante ("Ballesteros", "Velez", "Juan");
var pr1 = new Profesor ("ap1", "ap2");
