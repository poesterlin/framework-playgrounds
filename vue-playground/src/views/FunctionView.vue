<script setup lang="ts">
import { onDeactivated, onMounted, ref } from 'vue'

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


function expensiveToRunFunction() {
  return new Array(1000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done");
}
</script>

<template>
  <main>
    <h1>Function View</h1>
    <p>This view uses a function to run an expensive operation.</p>
    <div class="spinner" :style="{ '--spinner-position': `${spinnerPosition}%` }"> </div>
    <button @click="expensiveToRunFunction()">Run Expensive Function </button>
  </main>
</template>
