import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        const loginUser = (user) => {
            axios
                .post('localhost:5000/api/auth/login', user)
                .then(res => {
                    console.log(response);
                })
                .catch()
        }

        loginUser();
    }, [])

    const submitForm = e => {
        e.prevenutDefault();
        
    }
}

export default Login;