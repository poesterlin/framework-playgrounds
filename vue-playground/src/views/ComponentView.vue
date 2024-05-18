<script setup>
import Spinner from '@/components/Spinner.vue';

function expensiveToRunFunction() {
    return new Array(1000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done");
}
</script>

<template>
    <main>
        <h1>Component View</h1>
        <p>This view uses a separate component for the spinner.</p>
        <Spinner></Spinner>
        <pre>
    {{ new Array(1000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done") }}
    </pre>

        <button @click="expensiveToRunFunction()">Run Expensive Function</button>
    </main>
</template>
