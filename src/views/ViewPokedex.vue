<script setup lang="ts">
import BaseHeader from "../components/BaseHeader.vue";
import BaseContent from "../components/organism/BaseContent.vue";
import BaseDetails from "../components/BaseDetails.vue";
import BaseFooter from "../components/BaseFooter.vue";

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
    <div class="layout-wrapper">
        <base-header />
        <base-content />
        <base-details v-if="currentPokemon.id"  :pokemon="currentPokemon" />
    </div>
    <base-footer />
</template>
