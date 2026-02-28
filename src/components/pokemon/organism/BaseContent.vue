<script setup lang="ts">
import BaseCard from '../molecules/BaseCard.vue';
import BaseFilterList from '../molecules/BaseFilterList.vue';
import BasePagination from '../molecules/BasePagination.vue';

import { usePokemonStore } from "../../../store/pokemon.store";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const pokemonStore = usePokemonStore();

const {
  error,
  loading,
  pokemonTypes,
  paginatedPokemon
} = storeToRefs(pokemonStore);

onMounted(async () => {
  await pokemonStore.fetchPokemonList(0);
  await pokemonStore.fetchPokemonTypes();
});
</script>

<template>
  <div class="main-area">
    <base-filter-list :types="pokemonTypes" @filter-selected="pokemonStore.setSearchType" />
    <span v-if="loading">Cargando pokemones...</span>
    <span v-if="error">{{ error }}</span>
    <div v-if="!loading && !error" class="poke-grid-scroll">
      <div class="grid-container">
        <base-card v-for="pokemon in paginatedPokemon" :key="pokemon.id" :pokemon="pokemon" />
      </div>
      <base-pagination :current-page="pokemonStore.currentPage" :total-pages="pokemonStore.totalPages" @page-change="pokemonStore.changePage" />
    </div>
  </div>
  
</template>

