const numero = prompt('ingrese un numero');

// "ponemos a prueba" la variable numero
switch (numero) {
    case '1':
        console.log('tu numero es 1');
        break;
    case '2': 
        console.log('tu numero es 2');
        break;
    case '3':
        console.log('nu numero es 3');
        break;
    default:
        console.log('tu numero no es ni 1, ni 2, ni 3')
        break;
}

