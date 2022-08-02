let numero = prompt('ingrese su edad')

while (numero >= 18) {
    alert(`Felicidades, puedes pasar, tu edad es de ${numero}`);
    numero = prompt('Reingrese su edad');
}

/* mientras que se cumpla una condición, se ejecuta el código*/

for (let index = 0; index < 5; index++) {
    alert('Se asigna la variable index el valor de ' + index);
    alert('Se comprueba que la condición sea verdadera, si es verdadera se sigue, si es falsa, se corta el ciclo.')
    alert('Se ejecuta el còdigo');
    alert('termina el ciclo, se le suma 1 a index')
}

/* para comer, para tomar, para hacer */
/* para la cantidad de vueltas (en este caso 0), mientras que vueltas sea menor a 5 y al final de cada ciclo, sumale uno */