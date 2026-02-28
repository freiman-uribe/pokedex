<script setup lang="ts">
import { storeToRefs } from "pinia";
import BaseButton from "../../team/atoms/BaseButton.vue";
import { usePokemonStore } from "../../../store/pokemon.store";
import { useRouter } from 'vue-router'
const router = useRouter()

const pokemonStore = usePokemonStore();

const {
  team,
  currentPokemonTeam
} = storeToRefs(pokemonStore);

async function handleRemovePokemon(pokemonId: number) {
  await pokemonStore.removeFromTeam(pokemonId);
}

function handlePokemonClick(pokemonId: number) {
  pokemonStore.getCurrentPokemonTeam(pokemonId);
}

function redirectPokemon() {
  router.push('/');
}

</script>

<template>
  <div class="main-area">
    <header class="header-bar">
      <div class="header-bottom-row">
        <div class="app-title">Equipo de la Liga</div>
        <div class="action-chip" data-media-type="banani-button">
          {{ team.length }} / 6 Miembros
        </div>
      </div>
    </header>
    <div class="team-content-scroll">
      <div class="team-grid">
        <div :class="['team-slot',  currentPokemonTeam && currentPokemonTeam.id === member.id ? 'selected' : '']" data-media-type="banani-button" v-for="member in team" :key="member.id" @click="handlePokemonClick(member.id)">
          <div class="slot-image">
            <img
              data-aspect-ratio="1:1"
              data-query="pixel art charizard pokemon white background"
              alt="Charizard"
              :src="member.sprites.front_default"
            />
          </div>
          <div class="slot-info">
            <div class="slot-name-row">
              <div class="slot-name">{{ member.name }}</div>
            </div>
            <div class="slot-types" v-for="typeInfo in member.types" :key="typeInfo.type.name">
              <div class="type-pill" :class="'t-' + typeInfo.type.name">{{ typeInfo.type.name }}</div>
            </div>
          </div>
          <base-button
            :button-id="member.id"
            class="remove-btn"
            data-media-type="banani-button"
            @click="handleRemovePokemon(member.id)"
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
        <base-button v-for="value in 6 - team.length" :key="value" to="/" button-id="add-pokemon" class="team-slot empty" data-media-type="banani-button" v-if="team.length < 6" @click="redirectPokemon()">
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
