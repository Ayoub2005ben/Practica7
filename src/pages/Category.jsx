import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsGrid from '../components/NewsGrid';

function Category() {
    const { category } = useParams();
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(9); // Noticias por página

    useEffect(() => {
        fetch(`https://news-foniuhqsba-uc.a.run.app/${category}`)
            .then((response) => response.json())
            .then((data) => setNews(data))
            .catch((error) => console.error('Error fetching category news:', error));
    }, [category]);

    // Cálculo de noticias a mostrar
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedNews = news.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (endIndex < news.length) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{category} News</h1>
            <NewsGrid news={paginatedNews} />
            <div style={{ textAlign: 'center', margin: '1rem' }}>
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    style={{
                        padding: '0.5rem 1rem',
                        marginRight: '1rem',
                        backgroundColor: currentPage === 1 ? '#ccc' : '#333',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    }}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={endIndex >= news.length}
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: endIndex >= news.length ? '#ccc' : '#333',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: endIndex >= news.length ? 'not-allowed' : 'pointer',
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Category;
