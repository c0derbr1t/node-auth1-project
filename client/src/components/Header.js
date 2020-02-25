import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <h1>User Management System</h1>
            <nav>
                <NavLink to={'/login'}>Log In</NavLink>
                <NavLink to={'/register'}>Register</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/logout'}>Log Out</NavLink>
            </nav>
        </header>
    )
}