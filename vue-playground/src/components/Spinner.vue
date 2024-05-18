<script setup lang="ts">
import { ref, onMounted, onDeactivated } from 'vue';

const spinnerPosition = ref(0);
let abort = false;

onMounted(() => {
    const updateSpinner = () => {
        spinnerPosition.value = (spinnerPosition.value + 1) % 100;
        if (abort) return;

        requestAnimationFrame(updateSpinner);
    };

    updateSpinner();
});

onDeactivated(() => {
    abort = true;
});
</script>

<template>
    <div class="spinner" :style="{ '--spinner-position': `${spinnerPosition}%` }"> </div>
</template>
