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

// // フィルター機能前
// import "../styles/style.css";
// import { PokemonData } from "./modules/PokemonData.js";

// // Initialize Pokemon Data handler
// const pokemonData = new PokemonData();

// // Create and append the main container
// const app = document.querySelector("#app");
// app.innerHTML = `
//   <div class="container">
//     <h1>Pokemon Database</h1>
//     <div class="search-container">
//       <input
//         type="text"
//         id="pokemonName"
//         placeholder="Pokemon Name"
//         class="search-input"
//       />
//       <button id="getData" class="search-button">Get Data</button>
//     </div>

//     <div class="filter-container">
//       <input
//         type="number"
//         id="minHeight"
//         placeholder="Min Height (m)"
//         class="filter-input"
//       />
//       <input
//         type="number"
//         id="maxHeight"
//         placeholder="Max Height (m)"
//         class="filter-input"
//       />
//       <input
//         type="number"
//         id="minWeight"
//         placeholder="Min Weight (kg)"
//         class="filter-input"
//       />
//       <input
//         type="number"
//         id="maxWeight"
//         placeholder="Max Weight (kg)"
//         class="filter-input"
//       />
//       <button id="filterData" class="filter-button">Filter</button>
//     </div>

//     <div id="result" class="result"></div>
//     <a href="https://pokemon.gameinfo.io/en/pokemon"
//        target="_blank"
//        class="help-link">
//       You can find Pokemon names in English here
//     </a>
//   </div>
// `;

// // Add event listeners and functionality
// const searchInput = document.querySelector("#pokemonName");
// const searchButton = document.querySelector("#getData");
// const filterButton = document.querySelector("#filterData");
// const resultDiv = document.querySelector("#result");

// async function displayPokemonData(pokemonName) {
//   try {
//     const pokemon = await pokemonData.getPokemonByName(pokemonName);

//     resultDiv.innerHTML = `
//       <div class="pokemon-info">
//         <img
//           src="${pokemon.image}"
//           alt="${pokemon.name}"
//           class="pokemon-image"
//         />
//         <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
//         <p>Height: ${pokemon.height}m</p>
//         <p>Weight: ${pokemon.weight}kg</p>
//         <p>Types: ${pokemon.types.join(", ")}</p>
//       </div>
//     `;
//     resultDiv.classList.add("active");
//   } catch (error) {
//     resultDiv.innerHTML = `
//       <p class="error-message">
//         Pokemon not found. Please check the spelling and try again.
//       </p>
//     `;
//     resultDiv.classList.add("active");
//   }
// }

// // Filter function to display Pokemon based on height and weight
// async function filterPokemonData(minHeight, maxHeight, minWeight, maxWeight) {
//   try {
//     const pokemon = await pokemonData.getPokemonByName(
//       searchInput.value.trim()
//     );

//     if (
//       pokemon.height >= minHeight &&
//       pokemon.height <= maxHeight &&
//       pokemon.weight >= minWeight &&
//       pokemon.weight <= maxWeight
//     ) {
//       resultDiv.innerHTML = `
//         <div class="pokemon-info">
//           <img
//             src="${pokemon.image}"
//             alt="${pokemon.name}"
//             class="pokemon-image"
//           />
//           <h2>${
//             pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
//           }</h2>
//           <p>Height: ${pokemon.height}m</p>
//           <p>Weight: ${pokemon.weight}kg</p>
//           <p>Types: ${pokemon.types.join(", ")}</p>
//         </div>
//       `;
//     } else {
//       resultDiv.innerHTML = `
//         <p class="error-message">
//           No Pokemon found within the specified range.
//         </p>
//       `;
//     }
//     resultDiv.classList.add("active");
//   } catch (error) {
//     resultDiv.innerHTML = `
//       <p class="error-message">
//         Error fetching data. Please check the input values and try again.
//       </p>
//     `;
//     resultDiv.classList.add("active");
//   }
// }

// searchButton.addEventListener("click", () => {
//   const pokemonName = searchInput.value.trim();
//   if (pokemonName) {
//     displayPokemonData(pokemonName);
//   }
// });

// filterButton.addEventListener("click", () => {
//   const minHeight = parseFloat(document.querySelector("#minHeight").value) || 0;
//   const maxHeight =
//     parseFloat(document.querySelector("#maxHeight").value) || Infinity;
//   const minWeight = parseFloat(document.querySelector("#minWeight").value) || 0;
//   const maxWeight =
//     parseFloat(document.querySelector("#maxWeight").value) || Infinity;

//   filterPokemonData(minHeight, maxHeight, minWeight, maxWeight);
// });

// searchInput.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     const pokemonName = searchInput.value.trim();
//     if (pokemonName) {
//       displayPokemonData(pokemonName);
//     }
//   }
// });

// フィルター機能追加
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

    <div class="filter-container">
      <input
        type="number"
        id="minHeight"
        placeholder="Min Height (m)"
        class="filter-input"
      />
      <input
        type="number"
        id="maxHeight"
        placeholder="Max Height (m)"
        class="filter-input"
      />
      <input
        type="number"
        id="minWeight"
        placeholder="Min Weight (kg)"
        class="filter-input"
      />
      <input
        type="number"
        id="maxWeight"
        placeholder="Max Weight (kg)"
        class="filter-input"
      />
      <button id="filterData" class="filter-button">Filter</button>
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
const filterButton = document.querySelector("#filterData");
const resultDiv = document.querySelector("#result");

async function displayPokemonData(pokemonName) {
  try {
    const pokemon = await pokemonData.getPokemonByName(pokemonName);
    displaySinglePokemon(pokemon);
  } catch (error) {
    showError("Pokemon not found. Please check the spelling and try again.");
  }
}

function displaySinglePokemon(pokemon) {
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
}

function displayPokemonList(pokemonList) {
  if (pokemonList.length === 0) {
    showError("No Pokemon found within the specified range.");
    return;
  }

  resultDiv.innerHTML = `
    <div class="pokemon-list">
      ${pokemonList
        .map(
          (pokemon) => `
        <div class="pokemon-card">
          <img
            src="${pokemon.image}"
            alt="${pokemon.name}"
            class="pokemon-image"
          />
          <h3>${
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          }</h3>
          <p>Height: ${pokemon.height}m</p>
          <p>Weight: ${pokemon.weight}kg</p>
          <p>Types: ${pokemon.types.join(", ")}</p>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  resultDiv.classList.add("active");
}

function showError(message) {
  resultDiv.innerHTML = `
    <p class="error-message">${message}</p>
  `;
  resultDiv.classList.add("active");
}

// Filter function to display Pokemon based on height and weight
async function filterPokemonData(minHeight, maxHeight, minWeight, maxWeight) {
  try {
    const allPokemon = await pokemonData.getAllPokemon();
    const filteredPokemon = allPokemon.filter(
      (pokemon) =>
        pokemon.height >= minHeight &&
        pokemon.height <= maxHeight &&
        pokemon.weight >= minWeight &&
        pokemon.weight <= maxWeight
    );

    displayPokemonList(filteredPokemon);
  } catch (error) {
    showError("Error fetching data. Please try again later.");
  }
}

searchButton.addEventListener("click", () => {
  const pokemonName = searchInput.value.trim();
  if (pokemonName) {
    displayPokemonData(pokemonName);
  }
});

filterButton.addEventListener("click", () => {
  const minHeight = parseFloat(document.querySelector("#minHeight").value) || 0;
  const maxHeight =
    parseFloat(document.querySelector("#maxHeight").value) || Infinity;
  const minWeight = parseFloat(document.querySelector("#minWeight").value) || 0;
  const maxWeight =
    parseFloat(document.querySelector("#maxWeight").value) || Infinity;

  filterPokemonData(minHeight, maxHeight, minWeight, maxWeight);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const pokemonName = searchInput.value.trim();
    if (pokemonName) {
      displayPokemonData(pokemonName);
    }
  }
});
