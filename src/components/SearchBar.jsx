import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div style={{ textAlign: 'center', margin: '1rem 0' }}>
            <input
                type="text"
                placeholder="Search news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                    padding: '0.5rem',
                    width: '300px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    padding: '0.5rem 1rem',
                    marginLeft: '1rem',
                    backgroundColor: '#333',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
