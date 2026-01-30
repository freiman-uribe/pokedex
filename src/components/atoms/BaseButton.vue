<script setup lang="ts">
interface props {
    buttonType?: 'button' | 'submit' | 'reset';
    buttonClass?: string;
}
defineProps<props>();

</script>
<template>
    <button :class="buttonClass" :type="buttonType">
        <slot />
    </button>
</template>