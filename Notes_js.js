//MATRICES EN JS -->
console.log("Matrices -->")
let matriz = [[], []];

matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;

//Recorremos la matriz por medio de un ciclo for -->
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j])
    }
}

//FUNCIONES EN JS -->
function sumar(a, b) {
    return (a + b)
}
console.log(sumar(2, 5))

function saludar(name) {
    console.log(`Hola ${name}`)
}
saludar("Kevin");


//Tabla del 2 de multiplicación -->
n = 10
console.log("Tabla de multiplicar del 2 -->")
for (let i = 1; i <= n; i++) {
    console.log(`2 X ${i} = ${2 * i}`)
}

//Función para definir si un número es par -->
function esPar(n) {
    console.log("Comprobar si un número es par o no -->")
    if (typeof n !== "number") {
        console.log("Por favor ingrese un numero");
        return
    }
    let check;
    if (n % 2 == 0) {
        check = true
        console.log(`El número ${n} es par`)
    } else {
        check = false
        console.log(`El número ${n} no es par`)
    }
    return check
}
esPar(2)

//Función para definir el factorial de un número -->
function factorial(n){
    let resultado = 1
    console.log("Factorial de un número X -->")
    for(let i = 1; i<=n; i++){
        resultado = resultado * i;
    }
    return resultado
}
console.log(factorial(5))



function refraction(n){
    if (n ===1){
        console.log(n)
    }else{
        console.log(n)
        refraction(n - 1)
    }
}
refraction(4)

//Metodo length con variables-->

let variable1 = "Mundo";
console.log(variable1.length);


let name = "KevinBest";
let vari = 100000;
console.log(name.length)

for(let i = 0; i < name.length; i++){
    console.log(`${i} = ${name[i]}`)
}

//Subcadenas con metodo subtring(); -->
let cadena = "Hola mundo";
let subcadena = cadena.substring(0,4);
let subcadena2 = cadena.substring(5);
console.log(subcadena, subcadena2);

//Concatenar en JS -->
let cadena1 = "Hola";
let cadena2 = "Mundo";
let cadena3 = "By KevinBest";

let concatenar = cadena1 + " " + cadena2 + " " + cadena3;
console.log(concatenar);


//Uso de parseInt para convertir cadenas de Strings a valores numéricos -->

let numero1 = "10"
let numero2 = "20"
console.log(numero1 + numero2)
let suma = parseInt(numero1) + parseInt(numero2)
console.log(suma)

//Uso de toString para convertir valores numéricos a Strings -->
let b = 10
let a = 20
console.log(a + b)
let sum = a.toString() + b.toString()
console.log(sum)

//Valor absoluto -->
a = -10
let valorAbosoluto = Math.abs(a)
console.log(valorAbosoluto)

//Redondeo de un decimal -->
a = 8.7
let redondeo = Math.round(a)
console.log(redondeo)

//Truncado de un decimal -->
b = 8.3
let truncado = Math.trunc(b)
console.log(truncado)






