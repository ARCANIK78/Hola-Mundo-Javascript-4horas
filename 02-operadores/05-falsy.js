//short-circuit

//false
// 0
//''
//null
//undefind
//NaN

let nombre = 'Chanchito';
let username = nombre || 'anonimo';
console.log(username)


function fn1(){
    console.log('Soy funcion1');
    return false;
}

function fn2(){
    console.log('Soy funcion2');
    return true;
}

let x = fn1() && fn2()