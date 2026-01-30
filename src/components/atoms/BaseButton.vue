<script setup lang="ts">
interface props {
    buttonId: string;
    buttonType?: "button" | "submit" | "reset";
    buttonClass?: string;
}
const props = withDefaults(defineProps<props>(), {
    buttonType: "button",
    buttonClass: ""
});

</script>
<template>
    <button :id="props.buttonId" :class="props.buttonClass" :type="props.buttonType">
        <slot />
    </button>
</template>