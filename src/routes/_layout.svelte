<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		min-height: calc(100vh - 57px);
		background: lightgray;
		padding: 0.5em 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	@media (max-width: 500px){
        main {
            padding: 0.5em;
        }
    }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>