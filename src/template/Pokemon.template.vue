<script setup lang="ts">
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
</script>
<template>
    
    <div class="layout-wrapper">
        <base-header />
        <slot name="content" />
        <slot name="details" />
    </div>
    <base-footer />

</template>