<script>
    let user = {
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    document.title = 'Signup - Sapper Note';
    function signup(e){
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
        type="submit"
        value="Signup" >
    <p>Already have an account? <a href="auth/login">Login</a></p>
</form>