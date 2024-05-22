<script>
	import { onDestroy, onMount } from 'svelte';

	let spinnerPosition = 0;
	let abort = false;

	onMount(() => {
		const updateSpinner = () => {
			spinnerPosition = (spinnerPosition + 1) % 100;
			if (abort) return;

			requestAnimationFrame(updateSpinner);
		};

		updateSpinner();
	});

	onDestroy(() => {
		abort = true;
	});

	function expensiveToRunFunction() {
		return new Array(3000000)
			.fill(0)
			.map((_, i) => Math.sqrt(i))
			.map((n) => n * n)
			.map(String)
			.reduce(() => 'done');
	}
</script>

<main>
	<h1>Function View</h1>
	<p>This view uses a function to run an expensive operation.</p>
	<p>Current spinner position: {spinnerPosition}</p>
	<p>
		Result of expensive operation: {new Array(3000000)
			.fill(0)
			.map((_, i) => Math.sqrt(i))
			.map((n) => n * n)
			.map(String)
			.reduce(() => 'done')}
	</p>
	<button on:click={expensiveToRunFunction}>Run Expensive Function </button>
</main>
