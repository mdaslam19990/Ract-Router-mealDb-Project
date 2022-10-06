import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Headers.css";

const Headers = () => {

    return (
        <nav>
            <ul className='items'>
                    <NavLink to="/home" className={({isActive}) => isActive ? "active" : undefined}>Home</NavLink>
                    <NavLink to="/meal" className={({ isActive }) => isActive ? "active" : undefined}>Meal</NavLink>
                    <NavLink to="/tutorial" className={({ isActive }) => isActive ? "active" : undefined}>Tutorials</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>About</NavLink>
            </ul>
        </nav>
    );
};

export default Headers;