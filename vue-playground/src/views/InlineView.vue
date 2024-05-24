<script setup>
import { onDeactivated, ref } from 'vue';

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
  <main>
    <h1>Inline Executed Code</h1>
    <p>This view uses the same code but inlined into the html.</p>
    <div class="spinner" :style="{ '--spinner-position': `${spinnerPosition}%` }"> </div>
    <pre v-pre>
      {{ new Array(3000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done") }}
    </pre>
    <pre>
      => {{ new Array(3000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done") }}
    </pre>

    <button @click="updateSpinner">Start Spinner</button>
  </main>
</template>
