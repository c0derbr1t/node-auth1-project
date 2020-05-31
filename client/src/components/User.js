import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import { getOneUser } from '../actions';

const User = props => {
    const { id } = useParams();

    useEffect(() => {
        props.getOneStudent(id);
    })

    return (
        <div>
            <h1>User Profile:</h1>
            <div>
                <h2>Username: {props.user.username}</h2>
                <h3>Password Hash: {props.user.password}</h3>
                <p>User ID: {id}</p>
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        users: state.users,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStatetoProps, { getOneUser })(User);