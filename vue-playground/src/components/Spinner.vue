<script setup lang="ts">
import { ref, onDeactivated } from 'vue';

const spinnerPosition = ref(0);
let abort = false;

const updateSpinner = () => {
    console.timeEnd('updateSpinner');
    spinnerPosition.value = (spinnerPosition.value + 1) % 100;
    if (abort) return;

    console.time('updateSpinner');
    requestAnimationFrame(updateSpinner);
};

onDeactivated(() => {
    abort = true;
});
</script>

<template>
    <div style="border: 1px solid black">
        <div class="spinner" :style="{ '--spinner-position': `${spinnerPosition}%` }"> </div>
        <button @click="updateSpinner">Start Spinner</button>
    </div>
</template>
