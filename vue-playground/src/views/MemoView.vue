<script setup>
import { onDeactivated, ref } from 'vue';

const spinnerPosition = ref(0);
let abort = false;

const updateSpinner = () => {
  spinnerPosition.value = (spinnerPosition.value + 1) % 100;
  if (abort) return;

  requestAnimationFrame(updateSpinner);
};

onDeactivated(() => {
  abort = true;
});

</script>

<template>
  <main>
    <h1>Inline Executed Code Using 'v-memo' directive</h1>
    <p>This view uses the same inlined code with the <a href="https://vuejs.org/api/built-in-directives.html#v-memo"
        target="_blank">v-memo</a> directive</p>
    <div class="spinner" :style="{ '--spinner-position': `${spinnerPosition}%` }"> </div>

    <pre v-pre>
      &lt;div v-memo="[]">
        {{ new Array(3000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done") }}
      &lt;/div>
    </pre>
    <pre v-memo="[]">
      => {{ new Array(3000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done") }}
    </pre>

    <button @click="updateSpinner">Start Spinner</button>

  </main>
</template>
