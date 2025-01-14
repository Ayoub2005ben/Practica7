import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <nav style={{ background: '#333', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>Home</Link>
                <Link to="/WorldNews" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>World News</Link>
                <Link to="/Sport" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>Sport</Link>
                <Link to="/Finance" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>Finance</Link>
                <Link to="/Technology" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>Technology</Link>
                <Link to="/Entertainment" style={{ color: 'white', textDecoration: 'none' }}>Entertainment</Link>
            </div>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </nav>
    );
}

export default Navbar;
