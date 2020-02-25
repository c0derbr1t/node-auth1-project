import axios from 'axios';

export const axiosWithAuth = () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    
    return axios.create({
        baseUrl: 'https://localhost:5000/api',
        headers: {
            'Content-Type': 'application/json',
            'username': `${username}`,
            'password': `${password}`
        }
    })
}