<script>
	import { browser } from '$app/environment';
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
	<div class="spinner" style:--spinner-position="{spinnerPosition}%"></div>

	{#if browser}
		<p>
			Result of expensive operation
			{`
			{{
				new Array(3000000)
					.fill(0)
					.map((_, i) => Math.sqrt(i))
					.map((n) => n * n)
					.map(String)
					.reduce(() => 'done')
			}}
		`}

			{new Array(3000000)
				.fill(0)
				.map((_, i) => Math.sqrt(i))
				.map((n) => n * n)
				.map(String)
				.reduce(() => 'done')}
		</p>
	{/if}
	<button on:click={expensiveToRunFunction}>Run Expensive Function </button>
</main>

<style>
	.spinner {
		position: relative;
		width: 100%;
		height: 100px;
	}

	.spinner::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: var(--spinner-position);
		width: 30px;
		background-color: #333;
	}
</style>
