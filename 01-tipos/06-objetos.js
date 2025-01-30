// personaje de tv
let nombe ="Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime : "Demon slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime'])

personaje.edad = 13;
personaje['edad'] = 16;

delete personaje.anime;

console.log(personaje)