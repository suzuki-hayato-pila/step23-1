// import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "../counter.js";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));

import "../styles/style.css";
import { PokemonData } from "./modules/PokemonData.js";

// Initialize Pokemon Data handler
const pokemonData = new PokemonData();

// Create and append the main container
const app = document.querySelector("#app");
app.innerHTML = `
  <div class="container">
    <h1>Pokemon Database</h1>
    <div class="search-container">
      <input
        type="text"
        id="pokemonName"
        placeholder="Pokemon Name"
        class="search-input"
      />
      <button id="getData" class="search-button">Get Data</button>
    </div>
    <div id="result" class="result"></div>
    <a href="https://pokemon.gameinfo.io/en/pokemon"
       target="_blank"
       class="help-link">
      You can find Pokemon names in English here
    </a>
  </div>
`;

// Add event listeners and functionality
const searchInput = document.querySelector("#pokemonName");
const searchButton = document.querySelector("#getData");
const resultDiv = document.querySelector("#result");

async function displayPokemonData(pokemonName) {
  try {
    const pokemon = await pokemonData.getPokemonByName(pokemonName);

    resultDiv.innerHTML = `
      <div class="pokemon-info">
        <img
          src="${pokemon.image}"
          alt="${pokemon.name}"
          class="pokemon-image"
        />
        <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <p>Height: ${pokemon.height}m</p>
        <p>Weight: ${pokemon.weight}kg</p>
        <p>Types: ${pokemon.types.join(", ")}</p>
      </div>
    `;
    resultDiv.classList.add("active");
  } catch (error) {
    resultDiv.innerHTML = `
      <p class="error-message">
        Pokemon not found. Please check the spelling and try again.
      </p>
    `;
    resultDiv.classList.add("active");
  }
}

searchButton.addEventListener("click", () => {
  const pokemonName = searchInput.value.trim();
  if (pokemonName) {
    displayPokemonData(pokemonName);
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const pokemonName = searchInput.value.trim();
    if (pokemonName) {
      displayPokemonData(pokemonName);
    }
  }
});
