import React, { useState } from 'react';

function SearchModal({ news }) {
    const [search, setSearch] = useState('');

    const filteredNews = news.filter((article) =>
        article.headline.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {filteredNews.map((article) => (
                <div key={article.id}>
                    <h3>{article.headline}</h3>
                </div>
            ))}
        </div>
    );
}

export default SearchModal;
