<script>
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	let spinnerPosition = 0;
	let abort = false;
	let iterations = 0;

	onMount(() => {
		const updateSpinner = () => {
			spinnerPosition = (spinnerPosition + 1) % 100;
			// iterations++;

			if (abort) return;

			requestAnimationFrame(updateSpinner);
		};

		updateSpinner();
	});

	onDestroy(() => {
		abort = true;
	});
</script>

<main>
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

			{new Array(3000000 + iterations)
				.fill(0)
				.map((_, i) => Math.sqrt(i))
				.map((n) => n * n)
				.map(String)
				.reduce(() => 'done')}
		</p>
	{/if}
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
