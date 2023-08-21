// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for(let i = 1; i<200;i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`
    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i}.png`;
    pokemon.classList.add('pokemon');
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}