<script>
	import {user} from '../store.js';
	import {onMount} from 'svelte';
	import {goto} from '@sapper/app';
	import CreateNote from '../components/CreateNote.svelte';
	import Note from '../components/Note.svelte';
	import EditNote from '../components/EditNote.svelte';

	let notes = [];
	let editmode = false;
	let editindex;

	onMount(() => {
		fetch('/user.json')
		.then(r => r.json())
		.then(u => {
			if(u.ok){
				$user = u['user'];
				notes = $user.notes || [];
			}else {
				goto('/auth/login')
			}
		})
		.catch(err => console.error(err));
	});

	function save(){
		fetch('/user.json', {
			method: 'PATCH',
			body: JSON.stringify({notes: notes}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(r => r.json())
		.then(j => console.log(j))
		.catch(err => console.error(err))
	}
	
</script>
<style>
	#notes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
		grid-gap: 0.5rem;
	}
	
</style>

<svelte:head>
	<title>Sapper Notes - Demo Web Application</title>
</svelte:head>

<button on:click={save}>Save</button>
<CreateNote on:edit={() => {}} on:done={(e) => {if(e.detail.title!='' || e.detail.desc!='')notes=[...notes,e.detail]}}/>
<section id="notes">
{#each notes as note,index}
	<Note {note} on:edit={() => {editindex=index;editmode=true}} on:del={() => notes=notes.filter((n,i)=>i!=index)} ></Note>
{/each}
</section>
{#if editmode}
	<EditNote bind:note={notes[editindex]} on:exit={() => editmode=false} />
{/if}
