//Reto de arrays y diccionarios by Midudev Done:checkd -->

let array = [1 ,4, 6, 2, 4];
let n = 10;

for(let i = 0; i < array.length; i++){
    if(array[i]+array[i+1] == n){
        console.log(`El resultado de ${array[i]} + ${array[i+1]} es ${array[i] + array[i+1]}`);
        console.log(`Con posiciones ${[i]} y ${[i + 1]}`);
    }
}

//Dadas dos variables, a y b, intercambia sus valores sin usar una tercera variable.
let a = 5;
let b = 10;
// Tu código aquí
console.log(b, a); // Debería imprimir: 10 5



//Escribe una función que cuente la cantidad de vocales en una cadena dada.
function contarVocales(str) {
    let vocales = ["a", "e", "i", "o", "u"];
    let contadorVocales = 0;
    for(let i = 0; i < str.length; i++){
        if(contadorVocales.str == i){
            contadorVocales++;
        }
    }
 }
 console.log(contarVocales("Hola Mundo")); // Debería imprimir: 4
 
