//Creación de Objetos y métodos(Funciones) en Js -->

let persona = {
    name: "Kevin",
    lastName: "Arboleda",
    age: 18,
    nombreCompleto: function(titulo, tel){
        return titulo + " " + this.name + " " + this.lastName + " " + tel;
    }
}

//Funciones dentro de un objeto -->
console.log(persona.age)
console.log(persona.lastName)
console.log(persona.nombreCompleto());

//Otra forma de crear un objeto en Js
let persona2 = new Object();
persona2.name = "Groot";
persona2.lastname = "Best";
persona2.hero = "tree";

console.log(persona2.hero);
console.log(persona2["name"]);

//For in -->
for(namePropiedad in persona2){
    console.log(namePropiedad)
    console.log(persona2[namePropiedad])
}

//Agregar y eliminar Propiedades -->

persona2.tel = "95854848"
console.log(persona2);
delete persona2.tel
console.log(persona2)

//Concatenar cada valor de cada propiedad -->
console.log(persona2.name + " " + persona2.lastname)

//For in para ver las propiedades del Objeto -->
for(propiedad in persona2){
    console.log(persona2[propiedad])
}

// Otra manera de ver los objetos como array -->
let persona2Array = Object.values(persona2)
console.log(persona2Array);

//Como Json -->
let persona2String = JSON.stringify(persona)
console.log(persona2String);


//Uso del Get y Set en JS -->
let animal = {
    nombre: "Tony",
    raza: "Pincher",
    años: 7,
    idioma: "es",
    get lenguaje(){
        return this.idioma.toUpperCase();
    },
    set lenguaje(lenguaje){
        this.idioma = lenguaje.toUpperCase();
    },
    get nombreEntero(){
        return this.nombre + " y soy " + this.raza
    }
};
console.log(animal.nombreEntero);
console.log(animal.lenguaje);
animal.lenguaje = "en"
console.log(animal.lenguaje)
console.log(animal.idioma)


//Metodo constructor en js -->
function Persona(nombre, apellido, edad, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Juan", "Amezquita", 29, "juan@gmail.com");
console.log(padre.nombreCompleto())

let madre = new Persona("Lucia", "Aragón", 43, "lucia@gmail.com")
console.log(madre)

padre.nombre = "Carlos"
console.log(padre)

padre.tel = 12121212
Persona.prototype.tel = '234234'
console.log(madre)

persona1 = {
    nombre: "Kevin",
    apellido: "Arboleda",
    nombreCompleto: function(titulo,tel){
        return titulo + " " + this.nombre + " " + this.apellido + " " + tel
    }
}

persona2 = {
    nombre: "Carlos",
    apellido: "Alveaar"
}

console.log(persona1.nombreCompleto("Programdor", "23423423"));
console.log(persona1.nombreCompleto.call(persona2, "Ing", '123233232'));