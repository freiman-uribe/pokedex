<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../../../store/pokemon.store";
import BaseInput from "../atoms/BaseInput.vue";
import BaseButton from "../atoms/BaseButton.vue";
const emit = defineEmits<{
  (e: 'filter-selected', type: string): void;
}>();

defineProps<{
  types?: Array<any>;
}>();

const pokemonStore = usePokemonStore();

const {
  searchType
} = storeToRefs(pokemonStore);

const searchQuery = computed({
  get: () => pokemonStore.searchQuery,
  set: (value: string) => pokemonStore.setSearchQuery(value),
});

function handleClick(type: string) {
  emit('filter-selected', type);
}
</script>

<template>
  <header class="header-bar">
    <div class="search-row">
      <div
        style="
          width: 40px;
          height: 40px;
          background: var(--destructive);
          border: 3px solid var(--foreground);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 2px 0px var(--foreground);
          color: white;
        "
      >
        <div
          style="
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <iconify-icon
            icon="lucide:search"
            style="font-size: 24px; color: white"
          ></iconify-icon>
        </div>
      </div>
      <base-input
        inputId="search-input"
        inputType="search"
        inputClass="retro-input"
        inputPlaceholder="Name, Number or Type..."
        v-model="searchQuery" 
      />
    </div>

    <div class="filter-scroll">
      <base-button
        buttonId="all"
        :buttonClass="['filter-chip', searchType === 'all' || !searchType ? 'active' : ''].join(' ')"
        @click="handleClick('all')"
        >All</base-button>
      <base-button
        v-for="type in types"
        :key="type.name"
        :buttonId="type.name"
        :buttonClass="['filter-chip', searchType === type.name ? 'active' : ''].join(' ')"
        @click="handleClick(type.name)"
        >{{ type.name }}</base-button>
    </div>
  </header>
</template>
