import React, { useEffect } from 'react';

function Notification({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                backgroundColor: '#333',
                color: 'white',
                padding: '1rem',
                borderRadius: '5px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
            }}
        >
            {message}
        </div>
    );
}

export default Notification;
