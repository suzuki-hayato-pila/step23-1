import { HttpRequest } from "./HttpRequest.js";

export class PokemonData {
  constructor() {
    this.httpClient = new HttpRequest("https://pokeapi.co/api/v2");
  }

  async getPokemonByName(name) {
    try {
      const pokemon = await this.httpClient.get(
        `/pokemon/${name.toLowerCase()}`
      );
      return {
        name: pokemon.name,
        image: pokemon.sprites.other["official-artwork"].front_default,
        height: pokemon.height / 10,
        weight: pokemon.weight / 10,
        types: pokemon.types.map(
          (type) =>
            type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
        ),
      };
    } catch (error) {
      throw new Error("Pokemon not found");
    }
  }
}
