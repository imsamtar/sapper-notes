<style>
div {
    --h: 15rem;
    height: var(--h);
    width: calc(2 * var(--h));
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
div > a {
    border-radius: 50%;
    font-size: 3rem;
    font-weight: 700;
    mix-blend-mode: exclusion;
    background: white;
    display: grid;
    place-content: center;
}
@media (max-width: 768px){
    div {
        height: calc(2 * var(--h));
        width: var(--h);
        grid-template-columns: 1fr;
    }
}
</style>

<svelte:head>
    <title>Login - Sapper Note</title>
</svelte:head>

<div>
    <a href="/auth/login">Login</a>
    <a href="/auth/signup">Signup</a>
</div>