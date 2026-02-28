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
    currentPage: 1,
    totalPages: 0,
    typePokemonList: [] as Array<string>,
    allPokemonNames: [] as Array<string>,
    searchPokemonList: [] as Array<string>,
  }),
  actions: {
    setSearchQuery(query: string): void {
      this.searchQuery = query;
    },

    async fetchPokemonBySearch(query: string, page: number = 1) {
      this.loading = true;
      this.error = null;
      try {
        if (this.allPokemonNames.length === 0) {
          this.allPokemonNames = await servicePokemon.fetchAllPokemonNames();
        }
        this.searchPokemonList = this.allPokemonNames.filter((name) =>
          name.toLowerCase().includes(query.toLowerCase())
        );
        const pageSize = 10;
        this.currentPage = page > 0 ? page : 1;
        this.totalPages = Math.ceil(this.searchPokemonList.length / pageSize);
        const offset = (this.currentPage - 1) * pageSize;
        const pageNames = this.searchPokemonList.slice(offset, offset + pageSize);

        const data = await Promise.all(
          pageNames.map(async (name: string) => {
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
        this.error = "Failed to search Pokemon";
      }
    },
    setSearchType(type: string): void {
      this.searchType = type;
      this.typePokemonList = [];
      this.searchQuery = "";
      this.searchPokemonList = [];
      if (type === "all" || type === "") {
        this.fetchPokemonList(1);
      } else {
        this.fetchPokemonByType(type, 1);
      }
    },

    async fetchPokemonByType(type: string, page: number = 1) {
      this.loading = true;
      this.error = null;
      try {
        // Solo llama a la API de tipo si la lista está vacía (primera vez o tipo cambiado)
        if (this.typePokemonList.length === 0) {
          this.typePokemonList = await servicePokemon.fetchPokemonByType(type);
        }
        const pageSize = 10;
        this.currentPage = page > 0 ? page : 1;
        this.totalPages = Math.ceil(this.typePokemonList.length / pageSize);
        const offset = (this.currentPage - 1) * pageSize;
        const pageNames = this.typePokemonList.slice(offset, offset + pageSize);

        const data = await Promise.all(
          pageNames.map(async (name: string) => {
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
        this.error = "Failed to fetch Pokemon by type";
      }
    },

    changePage(page: number) {
      if (this.searchQuery.length >= 3) {
        this.fetchPokemonBySearch(this.searchQuery, page);
      } else if (this.searchType && this.searchType !== "all") {
        this.fetchPokemonByType(this.searchType, page);
      } else {
        this.fetchPokemonList(page);
      }
    },
    async fetchPokemonList(page: number = 1) {
      this.loading = true;
      this.error = null;
      try {
        this.currentPage = page > 0 ? page : 1;
        const offset = (this.currentPage - 1) * 10;
        const response = await servicePokemon.fetchPokemonList(10, offset);
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
        this.totalPages = Math.ceil(response.count / 10);
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

    async fetchEvolutionPokemon({ evolution, varieties }: any) {
      try {
        let evolutionsData = [] as Array<any>;
        const chainData = evolution.chain;

        const safeFetch = async (name: string) => {
          try {
            return await servicePokemon.fetchPokemonByName(name);
          } catch {
            try {
              const fallbackName = varieties?.find((v: any) => v.is_default)?.pokemon?.name;
              if (fallbackName && fallbackName !== name) {
                return await servicePokemon.fetchPokemonByName(fallbackName);
              }
            } catch { 
              return null;
            }
            return null;
          }
        };

        if (chainData.species.name) {
          const data = await safeFetch(chainData.species.name);
          if (data) {
            evolutionsData = [
              { sprites: data.sprites, name: chainData.species.name },
            ];
          }
        }
        if (chainData.evolves_to.length > 0) {
          const evo1Name = chainData?.evolves_to[0]?.species.name;
          const evo1 = await safeFetch(evo1Name);
          if (evo1) {
            evolutionsData = [
              ...evolutionsData,
              { sprites: evo1.sprites, name: evo1Name },
            ];
          }
          if (chainData.evolves_to[0].evolves_to.length > 0) {
            const evo2Name = chainData?.evolves_to[0]?.evolves_to[0]?.species.name;
            const evo2 = await safeFetch(evo2Name);
            if (evo2) {
              evolutionsData = [
                ...evolutionsData,
                { sprites: evo2.sprites, name: evo2Name },
              ];
            }
          }
        }
        return evolutionsData;
      } catch (error) {
        return [];
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

    async clearCurrentPokemonTeam() {
      this.currentPokemonTeam = {};
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
      await this.clearCurrentPokemon();
      this.error = null;
    },

    async removeFromTeam(pokemonId: number) {
      this.team = this.team.filter((p) => p.id !== pokemonId);
    },
  },

  getters: {
    paginatedPokemon: (state): [] => {
      return state.pokemons as [];
    },
    getCurrentPokemonTeam: (state) => async (id: number) => {
      state.currentPokemonTeam =
        (await state.team.find((pokemon) => pokemon.id === id)) || {};
    },
    getCurrentPokemon: (state) => (_id: number) => {
      state.currentPokemon =
        state.pokemons.find((pokemon) => pokemon.id === _id) || {};
    },
  },
});
