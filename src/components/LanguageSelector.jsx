import React from 'react';

function LanguageSelector({ onChangeLanguage }) {
    return (
        <div style={{ textAlign: 'center', margin: '1rem 0' }}>
            <select
                onChange={(e) => onChangeLanguage(e.target.value)}
                style={{
                    padding: '0.5rem',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }}
            >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="it">Italiano</option>
                <option value="pt">Português</option>
            </select>
        </div>
    );
}

export default LanguageSelector;
