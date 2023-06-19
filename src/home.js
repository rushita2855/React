import React from 'react'
import { NavLink } from 'react-router-dom';
export const Home = () => {
    return (
        <div style={{ backgroundColor: "lightblue", border: "2px solid black", margin: "10px", padding: "10px" }}>
            <h1>Home</h1>
            <NavLink to='/'></NavLink>
            <button><NavLink to='/signup'>Signup</NavLink></button><br /><br />
            <button> <NavLink to='/login'>Login</NavLink></button>
        </div>
    )
}