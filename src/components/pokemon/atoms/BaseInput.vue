<script setup lang="ts">
interface props {
    inputId: string;
    inputType?: string;
    inputPlaceholder?: string;
    inputClass?: string;
    modelValue: string;
}
const props = withDefaults(defineProps<props>(), {
    inputType: "text",
    inputPlaceholder: "",
    inputClass: ""
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const handleinput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};
</script>
<template>
    <input :id="props.inputId" :type="props.inputType" :class="props.inputClass" :placeholder="props.inputPlaceholder" :value="props.modelValue" @input="handleinput"/>
</template>