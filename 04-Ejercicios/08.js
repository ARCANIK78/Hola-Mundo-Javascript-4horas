let array = [{
    id: 1,
    name: 'Nicolas',
},{
    id: 2,
    name: 'Felipes',
},{
    id: 3,
    name: 'Chanchito'
}];
let pares = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Felipes"}],
    [3, {id: 3, name: "Chanchito"}],
];
function toParis(arr){
     let pairs = [];
     for(idx in arr){
        let elemnto = arr[idx];
        pairs[idx] = [elemnto.id, elemnto]
     }
     return pairs
}

let resultado = toParis(array);
console.log(resultado);  