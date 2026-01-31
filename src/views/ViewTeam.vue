<script setup lang="ts">
import PokemonTemplate from "../template/Pokemon.template.vue";
import BaseTeam from "../components/team/organism/BaseTeam.vue";
import BaseDetails from "../components/team/organism/BaseDetails.vue";
</script>

<template>
 <PokemonTemplate>
    <template #content>
      <base-team />
    </template>
    <template #details>
      <base-details />
    </template>
  </PokemonTemplate>
</template>