<script setup lang="ts">
import BaseEvolution from "../organism/BaseEvolution.vue";

defineProps<{
  pokemon?: any;
}>();

</script>
<template>
  <aside class="details-panel">
    <div class="panel-header">
      <div class="panel-title">{{ pokemon?.name }}</div>
      <div class="panel-id">#00{{ pokemon?.order }}</div>
    </div>

    <div class="active-image-area">
      <img
        data-aspect-ratio="1:1"
        data-query="pixel art bulbasaur pokemon full body dynamic pose"
        :alt="pokemon?.name"
        :src="pokemon?.sprites?.front_default"
      />
    </div>

    <div class="panel-content">
      <div class="type-row">
        <div
          v-for="typeInfo in pokemon?.types"
          :key="typeInfo.type.name"
          class="big-type-pill"
          :class="`t-${typeInfo.type.name}`">{{ typeInfo.type.name }}</div>
      </div>

      <div class="description-box">
        {{ pokemon?.description }}
      </div>

      <base-evolution :evolutions="pokemon?.evolutions" />

      <div style="text-align: center">
        <div
          class="filter-chip"
          style="
            display: inline-block;
            background: var(--foreground);
            color: var(--background);
            font-size: 14px;
            padding: 12px 24px;
          "
          data-media-type="banani-button"
        >
          Agregar al equipo
        </div>
      </div>
    </div>
  </aside>
</template>
<style scoped>
</style>
