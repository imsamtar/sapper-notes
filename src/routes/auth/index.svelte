<script>
    import {onMount} from 'svelte';
    onMount(() => {

    });
</script>
<style>
div {
    height: 50vmin;;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
div > a {
    font-size: 3rem;
    font-weight: 700;
    mix-blend-mode: exclusion;
    background: white;
    display: grid;
    place-content: center;
}
</style>
<div>
    <a href="/auth/login">Login</a>
    <a href="/auth/signup">Signup</a>
</div>