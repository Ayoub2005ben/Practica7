import React from 'react';
import { Link } from 'react-router-dom';

function NewsGrid({ news, onFavorite }) {
    return (
        <div className="NewsGrid">
            {news.map((article) => (
                <div key={article.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '1rem', backgroundColor: '#fff' }}>
                    <Link to={`/news/${article.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <img
                            src={article.image_url}
                            alt={article.headline}
                            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
                        />
                        <h3>{article.headline}</h3>
                        <p>{article.abstract}</p>
                    </Link>
                    {onFavorite && (
                        <button
                            onClick={() => onFavorite(article)}
                            style={{
                                marginTop: '0.5rem',
                                padding: '0.5rem',
                                backgroundColor: '#333',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Add to Favorites
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default NewsGrid;
