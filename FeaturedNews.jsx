import React from 'react';

function FeaturedNews({ article }) {
    if (!article) return null;

    return (
        <div className="featured-news">
            <img src={article.image_url} alt={article.headline} className="featured-news__image" />
            <div className="featured-news__content">
                <h1>{article.headline}</h1>
                <p>{article.abstract}</p>
            </div>
        </div>
    );
}

export default FeaturedNews;
