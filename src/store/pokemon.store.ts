import { defineStore } from "pinia";
import { servicePokemon } from "../services/pokemon.service";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemons: [] as Array<any>,
    pokemonTypes: [] as Array<any>,
    currentPokemon: {} as any,
    currentPokemonTeam: {} as any,
    team: [] as Array<any>,
    loading: true,
    error: null as string | null,
    searchQuery: "",
    searchType: "",
  }),
  actions: {
    setSearchQuery(query: string): void {
      this.searchQuery = query;
    },
    setSearchType(type: string): void {
      this.searchType = type;
    },
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

            return { ...res, evolutions };
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

    async clearCurrentPokemon() {
      this.currentPokemon = {};
    },
    async addToTeam(pokemon: any) {
      if (this.team.length >= 6) {
        return;
      }
      const exists = this.team.find((p) => p.id === pokemon.id);
      if (exists) {
        return;
      }
      this.team.push(pokemon);
      this.error = null;
    },

    async removeFromTeam(pokemonId: number) {
      this.team = this.team.filter((p) => p.id !== pokemonId);
    },
  },

  getters: {
    paginatedPokemon: (state): [] => {
      const filterType =
        state.searchType !== "all" && state.searchType !== ""
          ? state.pokemons.filter((pokemon) => {
              return pokemon.types.some(
                (typeInfo: any) => typeInfo.type.name === state.searchType,
              );
            })
          : state.pokemons;

      const filterQuery = state.searchQuery
        ? filterType.filter((pokemon) => {
            return pokemon.name
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase());
          })
        : filterType;

      return filterQuery;
    },
    getCurrentPokemonTeam: (state) => (id: number) => { 
      state.currentPokemonTeam = state.team.find(
        (pokemon) => pokemon.id === id,
      );
    },
    getCurrentPokemon: (state) => (_id: number) => {
      state.currentPokemon = state.pokemons.find(
        (pokemon) => pokemon.id === _id,
      );
    },
  },
});
