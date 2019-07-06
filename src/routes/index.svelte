<script>

	import CreateNote from '../components/CreateNote.svelte';
	import Note from '../components/Note.svelte';
	import EditNote from '../components/EditNote.svelte';

	let notes = [];
	let editmode = false;
	let editindex;
	
</script>
<style>
	#notes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
		grid-gap: 0.5rem;
	}
	
</style>
<CreateNote on:edit={() => {}} on:done={(e) => {if(e.detail.title!='' || e.detail.desc!='')notes=[...notes,e.detail]}}/>
<section id="notes">
{#each notes as note,index}
	<Note {note} on:edit={() => {editindex=index;editmode=true}} on:del={() => notes=notes.filter((n,i)=>i!=index)} ></Note>
{/each}
</section>
{#if editmode}
	<EditNote bind:note={notes[editindex]} on:exit={() => editmode=false} />
{/if}
