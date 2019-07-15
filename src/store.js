import {writable} from 'svelte/store';

export let user = writable({notes: []});

export let commit = function(notes){
    fetch('/user.json', {
        method: 'PATCH',
        body: JSON.stringify({notes: notes}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => r.json())
    .then(j => j)
    .catch(err => console.error(err))
};
