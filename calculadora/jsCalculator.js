function realizarOperacion(operacion) {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    let resultado;

    if (document.getElementById('number1').value === '' || document.getElementById('number1').value === ''){
        document.getElementById('resultado').innerHTML = 'Complete los espacios requeridos!'
        console.log('Complete los espacios requeridos!');
        return;
    }

    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0){
                console.log('Sintax Error, No se puede dividir entre Cero!');
                return;
            }
            resultado = num1 / num2;
            break;
    }
    console.log(resultado);
    document.getElementById('resultado').innerHTML = resultado;
}

function borrar() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    document.getElementById('resultado').innerHTML = 'Datos borrados';
    setTimeout(() => document.getElementById('resultado').innerHTML = '', 2000)
}
  
