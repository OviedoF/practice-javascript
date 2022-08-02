/* 
    boliche -> Si sos mayor de 18 años, podes pasar, y si no, no podes pasar.   
*/

const edad = prompt('¿Cuantos años tienes?');

/* 
    > -> mayor que
    < -> menor que
    >= -> mayor o igual que
    <= -> menor o igual que
    == -> Igual a
    === -> Estrictamente igual
*/

if (edad >= 18){
    alert('Puede pasar..');
} else {
    alert('No puede pasar...');
}