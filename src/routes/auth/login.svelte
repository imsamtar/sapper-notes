<script>
    let user = {
        username: '',
        password: ''
    }
    document.title = 'Login - Sapper Note';
    function login(e){
        e.preventDefault();
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
        type="submit"
        value="Login" >
    <p>Don't have an account? <a href="auth/signup">Signup</a></p>
</form>