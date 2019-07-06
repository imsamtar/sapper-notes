<script>
    import { onMount, onDestroy, createEventDispatcher } from 'svelte';
    export let note;
    let backup;
    const dispatch = createEventDispatcher();
    onMount(() => {
        backup = {...note};
        document.getElementById('notes').classList.toggle('blur')
    });
    onDestroy(() => {
        document.getElementById('notes').classList.toggle('blur');
    });
</script>
<style>
    .note {
        position: fixed;
        top: 100px;
        left: 50%;
        min-width: 270px;
        max-width: 500px;
        min-height: 250px;
        width: calc(100% - 2rem);
        transform: translateX(-50%);
        background: white;
        border: 3px solid gray;
        border-radius: 0.5rem;
        padding: 0.5rem;
        display: grid;
        grid-template-rows: 2rem auto 2rem;
        grid-gap: 1px;
    }
    .note > * {
        width: 100%;
    }
    .title {
        border-bottom: 1px solid gray;
        font-size: 1.3rem;
        font-weight: 700;
    }

    .desc {
        resize: none;
    }
    .actions {
        overflow: hidden;
        border-radius: 0.5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        box-shadow: 1px 1px 2px black;
    }
    .actions > button {
        font-weight: 900;
        color: white;
        text-shadow: 0px 0px 10px black;
    }
    .actions > .save {
        background: royalblue;
    }
    .actions > .cancel {
        background: #ff6f61;
    }
</style>
<section class="overlay">
    <div class="note">
        <input class="title" bind:value={note.title} placeholder="Title"/>
        <textarea class="desc" placeholder="Description" bind:value={note.desc}></textarea>
        <div class="actions">
            <button class="save" on:click={() => {dispatch('exit');}}>Save</button>
            <button class="cancel" on:click={() => {note=backup;dispatch('exit')}}>Cancel</button>
        </div>
    </div>
</section>