<script>
    import {onMount,createEventDispatcher} from 'svelte';
    export let note;
    const dispatch=createEventDispatcher();
</script>
<style>
    .note {
        min-height: 250px;
        background: white;
        border-radius: 0.5rem;
        padding: 0.5rem;
        display: grid;
        grid-template-rows: 2rem auto 2rem;
        grid-gap: 1px;
    }
    .title {
        border-bottom: 1px solid lightgray ;
        font-size: 1.3rem;
        font-weight: 700;
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
    .actions > .edit {
        background: royalblue;
    }
    .actions > .delete {
        background: #ff6f61;
    }
</style>
<div class="note">
    <div class="title">{note.title}</div>
    <div class="desc">{note.desc}</div>
    <div class="actions">
        <button class="edit" on:click={() => dispatch('edit')}>Edit</button>
        <button class="delete" on:click={() => dispatch('del')}>Delete</button>
    </div>
</div>