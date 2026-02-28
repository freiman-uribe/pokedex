<script setup lang="ts">
import PokemonTemplate from "../template/Pokemon.template.vue";
import BaseTeam from "../components/team/organism/BaseTeam.vue";
import BaseDetails from "../components/team/organism/BaseDetails.vue";

import { usePokemonStore } from "../store/pokemon.store";
import { storeToRefs } from "pinia";

const pokemonStore = usePokemonStore();

const {
  error,
  loading,
  currentPokemonTeam,
} = storeToRefs(pokemonStore);
</script>

<template>
 <PokemonTemplate>
    <template #content>
      <base-team />
    </template>
    <template #details>
      <!-- <base-details /> -->
      <base-details v-if="currentPokemonTeam.id" />
    </template>
  </PokemonTemplate>
</template>