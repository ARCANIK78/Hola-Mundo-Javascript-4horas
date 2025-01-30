

function crearUsuario(name, email){
    return{
        email,
        name,
        activos : true,
        recuperarClave: function(){
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Nicolas','Nico@holamundo.oi');
let user2 = crearUsuario('Abril','abri@holamundo.oi');

console.log(user1, user2)