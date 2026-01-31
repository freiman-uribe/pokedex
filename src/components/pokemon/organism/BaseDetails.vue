<script setup lang="ts">
import BaseEvolution from "../organism/BaseEvolution.vue";
// import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, RadarController } from 'chart.js'
// import { RadarChart } from 'vue-chart-3'

// Registrar todos los elementos necesarios
// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   RadarController
// )

// const data = {
//   labels: ['Velocidad', 'Fuerza', 'Resistencia', 'Agilidad', 'Precisión'],
//   datasets: [
//     {
//       label: 'Jugador A',
//       data: [65, 59, 90, 81, 56],
//       // backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 1
//     },
//     {
//       label: 'Jugador B',
//       data: [28, 48, 40, 19, 96],
//       // backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 1
//     }
//   ]
// }

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top'
//     },
//     title: {
//       display: true,
//       text: 'Comparación de habilidades'
//     }
//   }
// }

defineProps<{
  pokemon?: any;
}>();

</script>
<template>
  <!-- Right Panel: Details -->
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
      <!-- <RadarChart :chart-data="data" :chart-options="options" /> -->

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
