import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsGrid from '../components/NewsGrid';

function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [relatedNews, setRelatedNews] = useState([]);

    useEffect(() => {
        // Fetch la noticia específica
        fetch(`https://news-foniuhqsba-uc.a.run.app/news/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setArticle(data);

                // Fetch noticias relacionadas
                fetch(`https://news-foniuhqsba-uc.a.run.app/${data.section}`)
                    .then((response) => response.json())
                    .then((related) => setRelatedNews(related))
                    .catch((error) => console.error('Error fetching related news:', error));
            })
            .catch((error) => console.error('Error fetching article:', error));
    }, [id]);

    if (!article) return <div>Loading...</div>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{article.headline}</h1>
            <img
                src={article.image_url}
                alt={article.headline}
                style={{ width: '100%', marginBottom: '1rem' }}
            />
            <p>{article.body}</p>

            <h2 style={{ marginTop: '2rem' }}>Related News</h2>
            <NewsGrid news={relatedNews} />
        </div>
    );
}

export default Article;
