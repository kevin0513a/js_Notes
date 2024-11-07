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


