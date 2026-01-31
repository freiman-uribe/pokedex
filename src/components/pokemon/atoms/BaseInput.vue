<script setup lang="ts">
interface props {
    inputId: string;
    inputType?: string;
    inputPlaceholder?: string;
    inputClass?: string;
}
const props = withDefaults(defineProps<props>(), {
    inputType: "text",
    inputPlaceholder: "",
    inputClass: ""
});

</script>
<template>
    <input :id="props.inputId" :type="props.inputType" :class="props.inputClass" :placeholder="props.inputPlaceholder"/>
</template>