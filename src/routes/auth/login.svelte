<script>
    import {goto} from '@sapper/app';
    let user = {
        username: '',
        password: ''
    }
    let loading = false;
    
    async function login(e){
        e.preventDefault();
        loading = true;
        try{
            let r = await fetch('/auth/login.json', {method: 'POST', body: JSON.stringify(user), headers:{'Content-Type': 'application/json'}})
            let res = await r.json();
            loading = false;
            if(res.ok) goto('/');
        }catch(err){
            console.error(err);
        }
        loading = false;
    }
</script>

<style>
form > input {
    display: block;
    margin: 10px 0;
    width: 100%;
    border-radius: 4px;
}
form > * {
    padding: 6px 10px
}
</style>

<svelte:head>
    <title>Login - Sapper Note</title>
</svelte:head>

<form on:submit={login}>
    <input 
        bind:value={user.username}
        type="text" placeholder="Username: "
        minlength="6"
        required="true" >

    <input 
        bind:value={user.password}
        type="password" placeholder="Password: "
        minlength="6"
        required="true" >

    <input
        disabled={loading}
        type="submit"
        value="Login" >
    <p>Don't have an account? <a href="auth/signup">Signup</a></p>
</form>