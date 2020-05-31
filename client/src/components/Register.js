import React, { useState } from 'react';
import { connect } from 'react-redux';

import { register } from '../actions';

const Register = props => {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [verify, setVerify] = useState('');

    const handleUsernameChanges = e => {
        setNewUsername(e.target.value);
    }
    const handlePasswordChanges = e => {
        setNewPassword(e.target.value);
    }
    const handleVerify = e => {
        setVerify(e.target.value);
    }

    const newData = {
        username: newUsername,
        password: newPassword
    }

    const handleRegister = e => {
        e.preventDefault();
        if (newPassword === verify) {
            props.register(props, newData);
        } else {
            console.log("The passwords must match!");
        }
    }

    return (
        <div>
            <h1>Register your new User</h1>
            <form onSubmit={handleRegister}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={newData.username}
                        onChange={handleUsernameChanges}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={newData.password}
                        onChange={handlePasswordChanges}
                        required
                    />
                </label>
                <label>
                    Verify Password:
                    <input
                        type="password"
                        name="verify"
                        onChange={handleVerify}
                        value={verify}
                        required
                    />
                </label>
                <button>Register</button>
                <p>Already have an account? <a href="/login">Login</a>.</p>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { register })(Register);