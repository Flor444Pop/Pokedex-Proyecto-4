const pokemonContainer=document.querySelector(".pokemon-container");
function buscarPokemon(id){
fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
.then((res) => res.json())
.then((data) =>{
crearPokemon(data);
});
}
function buscarPokemones(){
for (let i=1;i<=6;i++) {
var pokemonAleatorio = Math.floor(Math.random()*200);
buscarPokemon(pokemonAleatorio);
}
}
function crearPokemon(pokemon){
const carta=document.createElement("div");
carta.classList.add("pokemon-block");

const contenedor=document.createElement("div");
contenedor.classList.add("img-container");

const imagen=document.createElement("img");
imagen.src=pokemon.sprites.front_default;
contenedor.appendChild(imagen);

const numero=document.createElement("p");
numero.textContent=`#${pokemon.id.toString().padStart(3,0)}`;

const nombre=document.createElement("p");
nombre.classList.add("name");
nombre.textContent=pokemon.name;
carta.appendChild(contenedor);
carta.appendChild(numero);
carta.appendChild(nombre);
pokemonContainer.appendChild(carta);
}
buscarPokemones();