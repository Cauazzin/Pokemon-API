const btn = document.querySelector("#btn")

function garcom() {
    let ramdom = Math.floor(Math.random() * 1025)
    let api = fetch('https://pokeapi.co/api/v2/pokemon/1025')
    .then((res) => res.json())
    .then((data) => {
        gerarPokemon(data)
    })
}

function gerarPokemon(data) {
    let nome = data.name
    let id = data.id
    let tipo = data.types[0].type.name
    let img = data.sprites.other.dream_world.front_default
    
}

btn.addEventListener("click", garcom)