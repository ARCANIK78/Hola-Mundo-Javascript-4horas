function Usuario(nombre){
    this.nombre = nombre;
}
console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let  user = new U('Nicolas')
let  user1 = new U('Juan')

console.log(user, user1)
 
function of (Fn, arg){
    return new Fn(arg);
}
let user2 =  of(Usuario,'Felix');
console.log(user2)

function returnd(){
    return function(){
        console.log('Hola mundo');
    }
}
let saludo = returnd();
saludo();