<script>
    import {goto} from '@sapper/app';
    let user = {
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    let loading = false;

    async function signup(e){
        e.preventDefault();
        loading = true;
        try{
            if(user.password === user.confirmPassword){
                delete user["confirmPassword"];
                let r = await fetch('/auth/signup.json', {method: 'POST', body: JSON.stringify(user), headers:{'Content-Type': 'application/json'}})
                let res = await r.json();
                // console.log(res);
                
                loading = false;
                if(res.ok) goto('/auth/login');
            }
        }catch(err){
            console.error(err);
            loading = false;
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
    <title>Signup - Sapper Note</title>
</svelte:head>

<form on:submit={signup}>
    <input 
        bind:value={user.name}
        type="text" placeholder="Full Name: "
        required="true" >

    <input 
        bind:value={user.username}
        type="text" placeholder="Username: "
        minlength="6"
        required="true" >

    <input 
        bind:value={user.email}
        type="email" placeholder="Email: "
        minlength="6"
        required="true" >

    <input 
        bind:value={user.password}
        type="password" placeholder="Password: "
        minlength="6"
        required="true" >

    <input 
        bind:value={user.confirmPassword}
        type="password" placeholder="Confirm Password: "
        minlength="6"
        required="true" >

    <input
        disabled={loading}
        type="submit"
        value="Signup" >
    <p>Already have an account? <a href="auth/login">Login</a></p>
</form>