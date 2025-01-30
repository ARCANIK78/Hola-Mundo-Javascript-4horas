
let array = [2, 5, 7, 15, -5, -100, 55];
console.log(array)
function getMenorMayor(arr){
    let con = 0;
    for(i of arr){
        if(i > 0){
            con ++;
        }
    }
    return con
}

let numeros = getMenorMayor(array);
console.log(numeros) ; 
  

 