/* Funcion -> Un fragmento de còdigo que nosotros llamamos cuando queremos con los valores que queremos. */

/* Funcion normal */

function MostrarNumeros(numPersonalizado){
    console.log('Mi numero es: ', numPersonalizado);
    console.log('El número anterior es: ', numPersonalizado-1);
    console.log('El número posterior es: ', numPersonalizado+1);
    console.log('EL doble de ese número es:', numPersonalizado*2);
    console.log('La mitad de ese número es:', numPersonalizado/2);    
}

/* Funcion flecha */

const MostrarNumeros2 = (numPersonalizado) => {
    console.log('Mi numero es: ', numPersonalizado);
    console.log('El número anterior es: ', numPersonalizado-1);
    console.log('El número posterior es: ', numPersonalizado+1);
    console.log('EL doble de ese número es:', numPersonalizado*2);
    console.log('La mitad de ese número es:', numPersonalizado/2);
}

MostrarNumeros2(4);
MostrarNumeros2(7);
MostrarNumeros2(10);

/* 
STACK -> 
Argentina programa = ANGULAR CREADO POR GOOGLE / JAVA / MYSQL
CoderHouse = REACT CREADO POR FACEBOOK / NODEJS / MYSQL O MONGODB
*/