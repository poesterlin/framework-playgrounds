<script setup>
import { onDeactivated, ref } from 'vue'

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

function expensiveToRunFunction() {
  return new Array(3000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done");
}
</script>

<template>
  <main>
    <h1>Heavy Code in Function</h1>
    <p>This view uses a function to run an expensive operation.</p>
    <div class="spinner" :style="{ '--spinner-position': `${spinnerPosition}%` }"> </div>

    <pre v-pre> {{ expensiveToRunFunction() }} </pre>
    <pre> => {{ expensiveToRunFunction() }} </pre>

    <button @click="updateSpinner">Start Spinner</button>
  </main>
</template>
