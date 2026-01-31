<script setup lang="ts">
import BaseCard from '../molecules/BaseCard.vue';
import BaseFilterList from '../molecules/BaseFilterList.vue';

import { usePokemonStore } from "../../../store/pokemon.store";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const pokemonStore = usePokemonStore();

const {
  error,
  loading,
  pokemons,
  pokemonTypes
} = storeToRefs(pokemonStore);

onMounted(async () => {
  await pokemonStore.fetchPokemonList();
  await pokemonStore.fetchPokemonTypes();
});
</script>

<template>
  <div class="main-area">
    <base-filter-list :types="pokemonTypes" />
    <span v-if="loading">Cargando pokemones...</span>
    <span v-if="error">{{ error }}</span>
    <div v-if="!loading && !error" class="poke-grid-scroll">
      <div class="grid-container">
        <base-card v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
      </div>
    </div>
  </div>
  
</template>

