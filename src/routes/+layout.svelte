<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<main>
		<slot></slot>
	</main>

	<footer>
		<p>visit <a href="https://coconut.or.id/">coconut.or.id</a> for more Information</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
