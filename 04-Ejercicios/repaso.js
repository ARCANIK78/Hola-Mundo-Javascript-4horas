console.log("||----LO APRENDIDO----||")
let a = 12;
let b = 23;
console.log('||----Operaciones artimeticas----||');
let suma = a + b;
let resta = a - b;
let mult = a * b;
let div = a / b;
let ope = a + b * (a * b);
console.log("La suma es: ", suma);
console.log("La resta es: ",resta);
console.log("La multiplicacion es: ",mult);
console.log("La division: ",div);
console.log("La operacion es: ",ope);

console.log("||----Operadores logicos----||")
let mayor = true;
let suscrito = true;
console.log( "Operador and", mayor && suscrito);
console.log( "Operador aor", mayor || suscrito);
console.log( "Operador not", !mayor); 
 
console.log('||----Operacion arrays----||');
let arra = ['Luis','Roger','Diego','Migules','Angel']
console.log(arra)
for (let ii in arra){
    console.log(ii)
}
for (let xx of arra){
    console.log('El nombre es = ',xx); 
}

console.log('||----Funciones----||')
function sum(){
    let c = a + b;
    return a * b + c;
} 
console.log(sum()); 

console.log("|----operador if----|")
let nombre = "Luis"
if(nombre == "Luis"){
    console.log("El nombre",nombre," es correcto" )
}else{
    console.log("EL nombre",nombre,"no es correcto")
} 
//ejemplo
let regu = 110;
if(regu > 100){
    console.log("El numero es mayor")
}else if(regu < 50){
    console.log("El numero es menor")
}else{
    console.log("El numero es medio")
}

console.log("|----Operadores ternarios----|")
let edad = 25;
let acceso = edad > 18 ? 'Tienes acceso a mamitas.com' : 'No tienes acceso a mamitas.com';
console.log(acceso);


console.log("|----Operadores while----|")
let cont = 0;
while (cont < 11){
    console.log("Contador :",cont);
    cont++;
}
//Ejemplo con numeros par 
let i = 0;
while (i < 10){
    if(i % 2 == 0){
        console.log("Numero par = ", i);
    }
    i++;
}
//Ejemplo con numeros impar 
let ii = 0;
while(ii < 10){
    if(ii & 2 == 2){
        console.log("Numero impares = ",ii);
    }
    ii++;
}
