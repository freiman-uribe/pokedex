<script setup lang="ts">
import PokemonTemplate from "../template/Pokemon.template.vue";
import BaseContent from "../components/pokemon/organism/BaseContent.vue";
import BaseDetails from "../components/pokemon/organism/BaseDetails.vue";

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
