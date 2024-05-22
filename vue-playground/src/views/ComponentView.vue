<script setup>
import Spinner from '@/components/Spinner.vue';
</script>

<template>
    <main>
        <h1>Separate Spinner into its own Component</h1>
        <p>This view uses a separate component for the spinner.</p>
        <Spinner></Spinner>
        <pre
            v-pre>{{ new Array(3000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done") }}</pre>
        <pre>=> {{ new Array(3000000).fill(0).map((_, i) => Math.sqrt(i)).map((n) => n * n).map(String).reduce(() => "done") }}</pre>
    </main>
</template>
