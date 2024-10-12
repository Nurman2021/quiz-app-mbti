<script>
	import { fly } from 'svelte/transition';
	import Hero from '$lib/images/hero.png';
</script>

<section class="start">
	<div class="card" in:fly={{ x: 200, duration: 200 }} out:fly={{ x: -200, duration: 200 }}>
		<div class="flex">
			<div>
				<h2>Coding Quiz Challenge</h2>
				<p>Try to answer to following code-related questions withing the time limit.</p>
				<p>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
				<button on:click>Start</button>
			</div>
			<img src={Hero} alt="logo github" class=" h-52" />
		</div>
	</div>
</section>

<style>
	.start {
		margin: 50px;
	}
</style>
