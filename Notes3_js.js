//Clases y Herencia en JavaScript, sobreescritura -->
class Persona {

    //Atributos estáticos para hallar la cantidad de objetos en una clase -->
    static contadorObjetosPersona = 0; 

    constructor(name, lastname, age) {
        this._name = name;
        this._lastname = lastname;
        this._age = age;
        Persona.contadorObjetosPersona++;
        console.log('se incrementa contador ' + Persona.contadorObjetosPersona)
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get lastname() {
        return this._name;
    }
    set lastname(lastname) {
        this._lastname = lastname;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    nombreCompleto(){
        return this._name + " " + this.lastname;
    }

    //Funciones static -->

    static saludar(){
        console.log("Saludos desde static")
    }
    static saludar2(persona){
        console.log(persona.name);
    }
}

class Programador extends Persona {
    constructor(name, lastname, age, languaje){
        super(name, lastname, age);
        this._languaje = languaje;    
    }

    get languaje(){
        return this._languaje;
    }

    set languaje(languaje){
        this._languaje = languaje;
    }
    nombreCompleto(){
        return super.nombreCompleto() + " y programo en " + this._languaje;
    }
    
}

let persona1 = new Persona("Kevin", "Arboleda", 18);
console.log(persona1)
let programador1 = new Programador("Kevin", "Arboleda", 18, "JavaScript");
console.log(programador1)
//Aquí error a corregir -->
console.log(programador1.nombreCompleto());
Persona.saludar();
Persona.saludar2(persona1);
Programador.saludar2(programador1);


console.log(Persona.contadorObjetosPersona);
console.log(Programador.contadorObjetosPersona);
console.log(programador1.contadorObjetosPersona);

//Funciones tipo flecha (arrow) -->

//Función normal -->
function suma (a,b){
    console.log(a + b)
}
suma(5,6)


//Funcion flecha, cabe recalcar que aplica hosting para esta funcion -->
let resta = (a,b) => {
    console.log(a+b)
}
resta(3,2);

const saludar = () => "Saludos desde funcion flecha";
console.log(saludar());


const salidaDeParametros = (mensaje) => (mensaje)
console.log(salidaDeParametros("Grande maquina"));

//Funciones callBack -->
//Aquí un ejemplo de funciones normales y término de hosting -->

imprimir2();
imprimir1();

function imprimir1 () {
    console.log("Primera impresión")
}

function imprimir2 () {
    console.log("Segunda impresión")
}


//Ahora funciones callBack

function imprimir(mensaje){
    console.log(mensaje);
}
//Error de extensión quoka -->
try{
    function suma(a, b, funcionCallBack){
        let resultado = a + b;
        funcionCallBack(`Resultado: ${resultado}`);
    }
}
catch(error){
    console.log(error.name)
}

suma(1,3,imprimir);

//Funciones con setTimeout despues de 3 segundos(Llamadas asíncronas) -->

function miFuncionCallBack(){
    console.log('Saludo asincrono despues de 3 segundos')
}

setTimeout(miFuncionCallBack, 3000)
setTimeout(function(){console.log('Mensaje asíncrono 2 desde consola')}, 4000)
setTimeout(() => console.log(";Mensaje asíncrono 3..."), 5000)

//Funcion setInterval -->
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

// setInterval(reloj, 1000);