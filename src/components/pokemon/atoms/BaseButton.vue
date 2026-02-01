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

const emit = defineEmits<{
    (e: 'click'): void;
}>();

function handleClick() {
    emit('click');
}
</script>
<template>
    <button :id="props.buttonId" :class="props.buttonClass" :type="props.buttonType" @click="handleClick">
        <slot />
    </button>
</template>