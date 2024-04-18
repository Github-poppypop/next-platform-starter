import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required /><br /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LoginPage;