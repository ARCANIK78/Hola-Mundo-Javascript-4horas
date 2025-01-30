
let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr){
    let menor = arr[0]
    let mayor = arr[0]
    for (i of arr){
    menor = menor < i ? menor : i ;
    mayor = mayor > i ? mayor : i ;
    }
    return [mayor,menor];
}

let numeros = getMenorMayor(array)
console.log(numeros)  


  
 