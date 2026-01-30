<script setup lang="ts">
import BaseHeader from "../components/BaseHeader.vue";
import BaseContent from "../components/organism/BaseContent.vue";
import BaseDetails from "../components/BaseDetails.vue";
import BaseFooter from "../components/BaseFooter.vue";
</script>

<template>
    <div class="layout-wrapper">
        <base-header />
        <base-content />
        <base-details />
    </div>
    <base-footer />
</template>
