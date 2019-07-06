<script>
    import {createEventDispatcher} from 'svelte';
    import EditNote from '../components/EditNote.svelte';

    let newNote = {title: '', desc: ''};
    let editmode = false;
    const dispatch=createEventDispatcher();
</script>
<style>
    .note {
        max-width: 100%;
        margin: 0 auto 10px auto;
        color: lightgray;
        background: white;
        border-radius: 0.5rem;
        padding: 0.1rem;
        font-size: 1.2rem;
        display: grid;
        place-content: center;
    }
</style>
<div class="note" on:click={()=>editmode=true}>
    +
</div>
{#if editmode}
    <EditNote bind:note={newNote} on:exit={() => {editmode=false;dispatch('done',newNote);newNote={title:'',desc:''}}}/>
{/if}