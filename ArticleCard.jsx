import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ article }) {
    return (
        <Link to={`/news/${article.id}`} className="article-card">
            <img src={article.image_url} alt={article.headline} className="article-card__image" />
            <div className="article-card__content">
                <h3>{article.headline}</h3>
                <p>{article.abstract}</p>
            </div>
        </Link>
    );
}

export default ArticleCard;
