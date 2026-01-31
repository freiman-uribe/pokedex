<script setup lang="ts">
import BaseButton from "../../team/atoms/BaseButton.vue";
</script>

<template>
  <div class="main-area">
    <header class="header-bar">
      <div class="header-bottom-row">
        <div class="app-title">Equipo de la Liga</div>
        <div class="action-chip" data-media-type="banani-button">
          1 / 6 Miembros
        </div>
      </div>
    </header>
    <div class="team-content-scroll">
      <div class="team-grid">
        <div class="team-slot selected" data-media-type="banani-button">
          <div class="slot-image">
            <img
              data-aspect-ratio="1:1"
              data-query="pixel art charizard pokemon white background"
              alt="Charizard"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            />
          </div>
          <div class="slot-info">
            <div class="slot-name-row">
              <div class="slot-name">Charizard</div>
            </div>
            <div class="slot-types">
              <div class="type-pill t-fire">Fire</div>
              <div class="type-pill t-flying">Flying</div>
            </div>
          </div>
          <base-button
            button-id="1"
            class="remove-btn"
            data-media-type="banani-button"
          >
            <div
              style="
                width: 14px;
                height: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <iconify-icon
                icon="lucide:x"
                style="font-size: 14px; color: inherit"
              ></iconify-icon>
            </div>
          </base-button>
        </div>
        <base-button button-id="add-pokemon" class="team-slot empty" data-media-type="banani-button">
          <div
            style="
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <iconify-icon
              icon="lucide:plus"
              style="font-size: 32px; color: inherit"
            ></iconify-icon>
          </div>
          <div
            style="font-size: 14px; font-weight: 700; text-transform: uppercase"
          >
            Agregar Miembro
          </div>
        </base-button>
      </div>
    </div>
  </div>
</template>
