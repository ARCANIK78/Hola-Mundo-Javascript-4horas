function suma(a, b){
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 7, 4, 3, 4);
console.log(resultado)

console.log( typeof suma);