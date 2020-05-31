import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const register = (props, data) => dispatch => {
    dispatch({ type: "REGISTER_USER_START" });
    axios
        .post('http://localhost:5000/api/register', data)
        .then(res => {
            localStorage.setItem("username", data.username);
            localStorage.setItem("password", data.password);
            dispatch({ type: "REGISTER_USER_SUCCESS", payload: res.data })
            props.history.push('/users');
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: "REGISTER_USER_ERROR", payload: err.message })
        })
}

export const login = (props, data) => dispatch => {
    dispatch({ type: "LOGIN_USER_START" });
    axios
        .post('localhost:5000/api/login', data)
        .then(res => {
            localStorage.setItem("username", data.username);
            localStorage.setItem("password", data.password);
            dispatch({ type: "LOGIN_USER_SUCCESS", paylaod: res.data })
            props.history.push("/users");
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: "LOGIN_USER_ERROR", payload: err.message })
        })
}

export const getUsers = () => dispatch => {
    dispatch({ type: "GET_USERS_START" });
    axiosWithAuth()
        .get('http://localhost:5000/api/users')
        .then(res => {
            dispatch({ type: "GET_USERS_SUCCESS", payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: "GET_USERS_ERROR", payload: err.message })
        })
}

export const getOneUser = (id) => dispatch => {
    dispatch({ type: "GET_ONE_USER_START" });
    return axiosWithAuth()
        .get(`http://localhost:5000/api/users/${id}`)
        .then(res => {
            dispatch({ type: "GET_ONE_USER_SUCCESS", payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: "GET_ONE_USER_ERROR", payload: err.message })
        })
}