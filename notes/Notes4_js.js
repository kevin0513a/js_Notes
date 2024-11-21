//Promesas en JS -->
let mifuncion = new Promise((resolved, reject) =>{
    let expresion = true;
    if(expresion)
        resolved('Resolvió correcto');
    else
        reject('Se produjo un error');
});

// mifuncion.then(valor => console.log(valor), error => console.log(error));
//Otra manera de llamar el error con diferente sintaxis -->
mifuncion.then(valor => console.log(valor)).catch(error => console.log(error));


//Promesas desde Timeout
let miPromesa = new Promise((resolver) => {
    setTimeout(() => resolver('saludos desde promesa Timeout'), 3000);
})

miPromesa.then(valor => console.log(valor))

//Async indica que una funcion regresa una promesa -->
async function miFuncionPromesa() {
    return 'Saludos con promesa y Asyncs';
}

// miFuncionPromesa().then(valor => console.log(valor));
async function funcionPromesaAwait() {
    let mipromesa = new Promise(resolver =>{
        resolver('Promesa con await...')
    })
    console.log( await mipromesa);
}
funcionPromesaAwait();

//setTimeOut, promesas, async, await
async function promesaAwaitAsyncTimeOut() {
    let miPromesa = new Promise(resolver =>{
        setTimeout(() => resolver('Promesita con setTimeOut'), 4000)
    })
    console.log(await miPromesa)
    console.log('Fin de la promesa')
}
promesaAwaitAsyncTimeOut();