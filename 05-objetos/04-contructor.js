

function Usuario(){
    this.id = 1;
    this.reucperaClave = function(){
        console.log('Recuperando clave...');
    }
}
let usuario = new Usuario();
console.log(usuario); 