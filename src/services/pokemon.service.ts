import { httpClient } from "../config/confAxios";

class ServicePokemon {
  async fetchPokemonList(limit: number = 10, offset: number = 0) {
    try {
      const response = await httpClient.get<any>(
        `/pokemon?limit=${limit}&offset=${offset}`,
      );
      return response;
    } catch (error) {
      throw new Error("Error fetching pokemon list");
    }
  }

  async fetchPokemonByIdOrName(data: string) {
    try {
      const response = await httpClient.get<any>(`/pokemon/${data}`);
      const species = await httpClient.get<any>(
        `/pokemon-species/${response.species.name}`,
      );
      
      const evolution = await httpClient.get<any>(`/evolution-chain/${species.evolution_chain.url.split('/').slice(-2, -1)[0]}`);

      let description = "";
      if (species.form_descriptions.length > 0) {
        description = species.form_descriptions.find((description: any) => {
            if (description.language.name === "es")
                return `${description.description}`;
            return null;
        })?.description;
      }

      if (species.form_descriptions.length === 0 || !description) {
        description = species.flavor_text_entries.find(
          (description: any) => {
            if (description.language.name === "es")
              return `${description.flavor_text}`;
            return null;
          },
        )?.flavor_text || "No description available";
      }
      return { ...response, description, evolution, varieties: species.varieties };
    } catch (error) {
      throw new Error("Error fetching pokemon por id");
    }
  }

  async fetchPokemonByName(name: string) {
    try {
      const response = await httpClient.get<any>(`/pokemon/${name}`);
      return response;
    } catch (error) {
      throw new Error("Error fetching pokemon por id");
    }
  }

  async fetchPokemonEvolutions(id: number) {
    try {
      const evolution = await httpClient.get<any>(`/evolution-chain/${id}`);
      return evolution;
    } catch (error) {
      throw new Error("Error fetching pokemon evolutions");
    }
  }

  async fetchAllPokemonNames() {
    try {
      const response = await httpClient.get<any>(`/pokemon?limit=100000&offset=0`);
      return (response.results as Array<any>).map((p: any) => p.name);
    } catch (error) {
      throw new Error("Error fetching all pokemon names");
    }
  }

  async fetchPokemonByType(type: string) {
    try {
      const response = await httpClient.get<any>(`/type/${type}`);
      return (response.pokemon as Array<any>).map((entry: any) => entry.pokemon.name);
    } catch (error) {
      throw new Error("Error fetching pokemon by type");
    }
  }

  async fetchPokemonTypes() {
    try {
      const response = await httpClient.get<any>(`/type`);
      return response;
    } catch (error) {
      throw new Error("Error fetching pokemon types");
    }
  }
}

export const servicePokemon = new ServicePokemon(); 