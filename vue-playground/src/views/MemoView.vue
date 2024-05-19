<script setup>
import { onDeactivated, onMounted, ref } from 'vue';

const spinnerPosition = ref(0);
let abort = false;

const updateSpinner = () => {
  spinnerPosition.value = (spinnerPosition.value + 1) % 100;
  if (abort) return;

  requestAnimationFrame(updateSpinner);
};

const increment = () => {
  spinnerPosition.value = (spinnerPosition.value + 10) % 100;
};

onDeactivated(() => {
  abort = true;
});

function startSpinner() {
  updateSpinner();
}
</script>

<template>
  <main>
    <h1>Function View</h1>
    <p>This view uses a function to run an expensive operation.</p>
    <div class="spinner" :style="{ '--spinner-position': `${spinnerPosition}%` }"> </div>

    <pre v-memo="[]">
      {{ new Array(1000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done") }}
    </pre>

    <button @click="increment">Increment</button>

    <button @click="startSpinner">Start Spinner</button>

  </main>
</template>
