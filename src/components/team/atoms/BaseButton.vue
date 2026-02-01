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
    (e: "click", event: MouseEvent): void;
}>();

function handleClick(event: MouseEvent) {
    emit("click", event);
}

</script>
<template>
    <button :id="props.buttonId" :class="props.buttonClass" :type="props.buttonType" @click="handleClick">
        <slot />
    </button>
</template>