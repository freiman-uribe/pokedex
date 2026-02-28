<script setup lang="ts">
import { computed } from 'vue';
import BaseButton from '../atoms/BaseButton.vue';

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

defineEmits<{
  (e: "page-change", page: number): void;
}>();

const WINDOW_SIZE = 10;

const visiblePages = computed(() => {
  const total = props.totalPages;
  const current = props.currentPage;

  if (total <= WINDOW_SIZE) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  // Mantener la página actual en la posición 5 de la ventana
  let start = Math.max(1, current - 4);
  let end = start + WINDOW_SIZE - 1;

  // Ajustar si la ventana se sale por el final
  if (end > total) {
    end = total;
    start = Math.max(1, end - WINDOW_SIZE + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

const showStartEllipsis = computed(() => visiblePages.value[0] > 1);
const showEndEllipsis = computed(
  () => visiblePages.value[visiblePages.value.length - 1] < props.totalPages
);
</script>
<template>
    <div class="pagination">
        <base-button
            buttonId="prev-button"
            buttonClass="filter-chip"
            :disabled="currentPage === 1"
            @click="$emit('page-change', currentPage - 1)"
        >
        Previous
        </base-button>

        <span v-if="showStartEllipsis" class="ellipsis">...</span>

        <base-button
            v-for="value in visiblePages"
            :key="value"
            :buttonId="`page-${value}`"
            buttonClass="filter-chip"
            :class="currentPage === value ? 'active' : ''"
            @click="$emit('page-change', value)"
        >
            {{ value }}
        </base-button>

        <span v-if="showEndEllipsis" class="ellipsis">...</span>
        <base-button v-if="showEndEllipsis" button-id="last-page-button" buttonClass="filter-chip" @click="$emit('page-change', totalPages)"> {{ totalPages }} </base-button>
        

        <base-button
            buttonId="next-button"
            buttonClass="filter-chip"
            :disabled="currentPage === totalPages"
            @click="$emit('page-change', currentPage + 1)"
        >
        Next
        </base-button>
    </div>
</template>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
}

.ellipsis {
    padding: 0 4px;
    color: var(--color-text, #555);
    font-weight: bold;
    user-select: none;
}
</style>