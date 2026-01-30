<script setup lang="ts">
import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, RadarController } from 'chart.js'
import { RadarChart } from 'vue-chart-3'

// Registrar todos los elementos necesarios
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  RadarController
)

const data = {
  labels: ['Velocidad', 'Fuerza', 'Resistencia', 'Agilidad', 'Precisión'],
  datasets: [
    {
      label: 'Jugador A',
      data: [65, 59, 90, 81, 56],
      // backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      label: 'Jugador B',
      data: [28, 48, 40, 19, 96],
      // backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Comparación de habilidades'
    }
  }
}


</script>
<template>
  <!-- Right Panel: Details -->
  <aside class="details-panel">
    <div class="panel-header">
      <div class="panel-title">Bulbasaur</div>
      <div class="panel-id">#001</div>
    </div>

    <div class="active-image-area">
      <img
        data-aspect-ratio="1:1"
        data-query="pixel art bulbasaur pokemon full body dynamic pose"
        alt="Bulbasaur Large"
        src="https://storage.googleapis.com/banani-generated-images/generated-images/6c63759e-e70e-4cca-ade4-cef8505651bc.jpg"
      />
    </div>

    <div class="panel-content">
      <div class="type-row">
        <div class="big-type-pill t-grass">Grass</div>
        <div class="big-type-pill t-poison">Poison</div>
      </div>

      <div class="description-box">
        A strange seed was planted on its back at birth. The plant sprouts and
        grows with this Pokémon.
      </div>

      <RadarChart :chart-data="data" :chart-options="options" />

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
          Add to Team
        </div>
      </div>
    </div>
  </aside>
</template>
<style scoped>
</style>
