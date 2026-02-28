<script setup lang="ts">
import { usePokemonStore } from "../../../store/pokemon.store";
import { storeToRefs } from "pinia";
const pokemonStore = usePokemonStore();


defineProps<{
  pokemon: any;
}>();

const {
    error,
    loading,
    currentPokemon,
} = storeToRefs(pokemonStore);

const handlePokemonClick = (_id: number) => {
    pokemonStore.getCurrentPokemon(_id);
};
</script>

<template>
    <div :class="['compact-card', currentPokemon.id === pokemon.id ? 'selected' : '']" data-media-type="banani-button" @click="handlePokemonClick(pokemon.id)">
        <div class="card-img">
            <img data-aspect-ratio="1:1" data-query="pixel art bulbasaur pokemon white background" :alt="pokemon.name"
                :src="pokemon.sprites.front_default" />
        </div>
        <div class="card-details">
            <div class="card-num">#00{{ pokemon.id }}</div>
            <div class="card-name">{{ pokemon.name }}</div>
        </div>
    </div>
</template>