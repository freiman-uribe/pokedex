<script setup lang="ts">
import BaseCard from './organism/BaseCard.vue';
import BaseFilterList from './organism/BaseFilterList.vue';
</script>

<template>
  <div class="main-area">
    <base-filter-list />
    <div class="poke-grid-scroll">
      <div class="grid-container">
        <base-card />
      </div>
    </div>
  </div>
</template>

