function cualesmayor(a, b) {
    if(a > b){
        return a;
    }else{
       return b;
    }
}  

let mayor = cualesmayor(10, 5);
console.log(mayor);
//otra forma

function cualesmayo(a, b) {
    return (a > b) ? a : b;
}
let mayo = cualesmayo(10, 5);
console.log(mayo);