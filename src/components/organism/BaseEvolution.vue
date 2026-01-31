
<script setup lang="ts">
defineProps<{
  evolutions?: Array<any>;
}>();
</script>

<template>
    <div class="stats-block">
        <div
            style="font-size: 14px; font-weight: 800; text-transform: uppercase; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 6px;">
                <div style="width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                    <iconify-icon icon="lucide:sparkles" style="font-size: 16px; color: black"></iconify-icon>
                </div>
                Evoluciones
            </div>
            <div style="font-size: 10px; color: var(--muted-foreground); font-weight: 700;">Cadena completa</div>
        </div>

        <div style="display: grid;
                    grid-template-columns: repeat(2, minmax(auto, 1fr));
                    gap: 20px;">
          <div v-for="evolution in evolutions" :key="evolution.name" style="padding: 8px 10px; background: var(--background); border: 2px solid var(--foreground); box-shadow: 3px 3px 0px var(--muted-foreground);"
               >
                  <div
                    style="width: 52px; height: 52px; border: 2px solid var(--foreground); background: var(--secondary); display: flex; align-items: center; justify-content: center; margin: auto;">
                    <img data-query="pixel art bulbasaur pokemon front sprite"
                        :alt="`${evolution.name} evolution step`"
                        style="width: 100%; height: 100%; object-fit: contain; image-rendering: pixelated;"
                        :src="evolution.sprites?.front_default" />
                </div>
                <div style="flex: 1; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                    <span style="font-size: 14px; font-weight: 800; margin: auto; text-transform: uppercase;">{{ evolution.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>