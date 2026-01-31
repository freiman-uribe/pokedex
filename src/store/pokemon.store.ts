import { defineStore } from "pinia";
import { servicePokemon } from "../services/pokemon.service";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemons: [] as Array<any>,
    pokemonTypes: [] as Array<any>,
    currentPokemon: {} as any,
    team: [] as Array<any>,
    loading: true,
    error: null as string | null,
  }),
  actions: {
    async fetchPokemonList() {
      this.loading = true;
      this.error = null;
      try {
        const response = await servicePokemon.fetchPokemonList();
        const data = await Promise.all(
          response.results.map(async (item: any) => {
            const name = item.name;
            const res = await this.fetchPokemonByIdOrName(name);
            const evolutions = await this.fetchEvolutionPokemon(res);
            
            return {...res, evolutions };
          }),
        );
        this.pokemons = data;
        this.error = null;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = "Failed to fetch Pokemon list";
      }
    },

    async fetchPokemonByIdOrName(_data: string) {
        try {
            const response = await servicePokemon.fetchPokemonByIdOrName(_data);
            return response;
        } catch (error) {
            throw new Error("Error fetching pokemon por id");
        }
    },

    async fetchEvolutionPokemon({ evolution }: any) {
        try {
          let evolutionsData = [] as Array<any>;
          const chainData = evolution.chain;
          if (chainData.species.name) {
            const { sprites } = await servicePokemon.fetchPokemonByName(
              chainData.species.name,
            );
            evolutionsData = [{ sprites, name: chainData.species.name }];
          }
          if (chainData.evolves_to.length > 0) {
            const { sprites } = await servicePokemon.fetchPokemonByName(
              chainData?.evolves_to[0]?.species.name,
            );
            evolutionsData = [
              ...evolutionsData,
              { sprites, name: chainData?.evolves_to[0]?.species.name },
            ];
            if (chainData.evolves_to[0].evolves_to.length > 0) {
              const { sprites } = await servicePokemon.fetchPokemonByName(
                chainData?.evolves_to[0]?.evolves_to[0]?.species.name,
              );
              evolutionsData = [
                ...evolutionsData,
                {
                  sprites,
                  name: chainData?.evolves_to[0]?.evolves_to[0]?.species.name,
                },
              ];
            }
          }
          return evolutionsData;
        } catch (error) {
            throw new Error("Error fetching pokemon evolutions");
        }
    },

    async fetchPokemonTypes() {
      try {
        const response = await servicePokemon.fetchPokemonTypes();
        this.error = null;
        this.loading = false;
        this.pokemonTypes = response.results;
      } catch (error) {
        this.loading = false;
        this.error = "Failed to fetch Pokemon types";
      }
    },
  },

  getters: {
    getCurrentPokemon: (state) => (_id: number) =>{
        state.currentPokemon = state.pokemons.find((pokemon) => pokemon.id === _id);
    },
  },
});
