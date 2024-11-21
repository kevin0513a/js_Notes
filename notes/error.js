//Manejo de errores en js con try catch -->

'use strict'
try{
    x = 10
    
}
catch(error){
    console.log(error.message);
}

finally{
    console.log("Termina la revision de errores");
}

console.log("Continuamos");

//Otro ejemplo de try catch -->

let resultado = -7

try{
    if(isNaN(resultado)) throw 'No es un número';
    if(resultado === "") throw 'Esto es una cadena vacia';
    if(resultado >= 0) throw 'Valor positivo';
    if(resultado < 0) throw 'Valor negativo';
}
catch(error){
    console.log(error)
}