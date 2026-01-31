<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  RadarController,
} from "chart.js";
import { RadarChart } from "vue-chart-3";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  RadarController,
);

const data = {
  labels: ["Velocidad", "Fuerza", "Resistencia", "Agilidad", "Precisión"],
  datasets: [
    {
      label: "Charizard",
      data: [28, 48, 40, 19, 96],
      borderColor: "red",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Comparación de habilidades",
    },
  },
};
</script>
<template>
  <div class="details-panel">
    <div class="panel-header">
      <div class="panel-title">Charizard</div>
      <div class="panel-id">#006</div>
    </div>

    <div class="active-image-area">
      <img
        data-aspect-ratio="1:1"
        data-query="pixel art charizard pokemon full body dynamic pose"
        alt="Charizard Detail"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
      />
    </div>

    <div class="panel-content">
      <div class="type-row">
        <div class="big-type-pill t-fire">Fire</div>
        <div class="big-type-pill t-flying">Flying</div>
    
      </div>

      <div class="stats-block">
        <div class="stats-title-row">
          <div
            style="
              width: 16px;
              height: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <iconify-icon
              icon="lucide:radar"
              style="font-size: 16px; color: var(--foreground)"
            ></iconify-icon>
          </div>
          Habilidades
        </div>
        <div class="radar-container">
          <RadarChart :chart-data="data" :chart-options="options" />
        </div>
      </div>
    </div>
  </div>
</template>
