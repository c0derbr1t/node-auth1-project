import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import User from './User';

import { getUsers } from '../actions';
import { getOneUser } from '../actions';

const UsersList = props => {
    useEffect(() => {
        props.getUsers();
    }, []);
    
    const handleClick = (id) => {
        props.getOneUser(id).then(() => props.history.push(`/users/${id}`));
    }

    return (
        <div>
            <h1>Users List</h1>
            {props.users.map(user => (
                <User onClick={() => handleClick(user.id)}>
                    <h2>Username: {user.username}</h2>
                    <h3>Password hash: {user.password}</h3>
                </User>
            ))}
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

export default connect(mapStateToProps, { getUsers, getOneUser })(UsersList);