import React from 'react';

function Loader() {
    return (
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <div
                style={{
                    border: '4px solid #f3f3f3',
                    borderRadius: '50%',
                    borderTop: '4px solid #333',
                    width: '40px',
                    height: '40px',
                    animation: 'spin 1s linear infinite',
                }}
            />
            <p>Loading...</p>
        </div>
    );
}

export default Loader;
