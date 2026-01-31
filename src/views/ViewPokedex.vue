<script setup lang="ts">
import PokemonTemplate from "../template/pokemons.tgemplate.vue";
import BaseContent from "../components/organism/BaseContent.vue";
import BaseDetails from "../components/BaseDetails.vue";

import { usePokemonStore } from "../store/pokemon.store";
import { storeToRefs } from "pinia";

const pokemonStore = usePokemonStore();

const {
    error,
    loading,
    currentPokemon,
} = storeToRefs(pokemonStore);

</script>

<template>
    <PokemonTemplate>
        <template #content>
            <base-content />
        </template>
        <template #details>
            <base-details v-if="currentPokemon.id"  :pokemon="currentPokemon" />
        </template>
    </PokemonTemplate>
</template>
