import React, { useState } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

const Login = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChanges = e => {
        setUsername(e.target.value);
    }
    const handlePasswordChanges = e => {
        setPassword(e.target.value);
    }

    const loginData = {
        username: username,
        password: password,
    }

    const handleLogin = e => {
        e.preventDefault();
        props.login(props, loginData);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input 
                        type="username"
                        name="username"
                        value={loginData.username}
                        onChange={handleUsernameChanges}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handlePasswordChanges}
                        required
                    />
                </label>
                <button>Log In</button>
            </form>
            <p>New User? <a href="/register">Register here</a>.</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        users: state.users
    }
}

export default connect(mapStateToProps, { login })(Login);