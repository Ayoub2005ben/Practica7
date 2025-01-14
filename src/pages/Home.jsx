import React, { useEffect, useState } from 'react';
import NewsGrid from '../components/NewsGrid';
import SearchBar from '../components/SearchBar';
import LanguageSelector from '../components/LanguageSelector';
import Loader from '../components/Loader';
import Notification from '../components/Notification';

function Home() {
    const [news, setNews] = useState([]); // Todas las noticias
    const [filteredNews, setFilteredNews] = useState([]); // Noticias filtradas
    const [favorites, setFavorites] = useState([]); // Noticias favoritas
    const [language, setLanguage] = useState('en'); // Idioma seleccionado
    const [loading, setLoading] = useState(true); // Estado de carga
    const [notification, setNotification] = useState(''); // Notificaciones

    // Fetch de las noticias desde la API
    useEffect(() => {
        fetch('https://news-foniuhqsba-uc.a.run.app')
            .then((response) => response.json())
            .then((data) => {
                setNews(data);
                setFilteredNews(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
                setLoading(false);
            });
    }, []);

    // Maneja el filtrado por palabras clave
    const handleSearch = (query) => {
        const filtered = news.filter((article) =>
            article.translations[language]?.headline.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredNews(filtered);
    };

    // Cambia el idioma de las noticias
    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        const translatedNews = news.map((article) => ({
            ...article,
            headline: article.translations[lang]?.headline || article.headline,
            abstract: article.translations[lang]?.abstract || article.abstract,
        }));
        setFilteredNews(translatedNews);
    };

    // Agrega una noticia a favoritos
    const addToFavorites = (article) => {
        if (!favorites.find((fav) => fav.id === article.id)) {
            setFavorites([...favorites, article]);
            setNotification('Added to Favorites!');
        }
    };

    // Cierra la notificación después de un tiempo
    const closeNotification = () => {
        setNotification('');
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Latest News</h1>
            <LanguageSelector onChangeLanguage={handleLanguageChange} />
            <SearchBar onSearch={handleSearch} />
            {loading ? (
                <Loader />
            ) : (
                <NewsGrid news={filteredNews} onFavorite={addToFavorites} />
            )}
            {notification && <Notification message={notification} onClose={closeNotification} />}
            <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Favorites</h2>
            <NewsGrid news={favorites} />
        </div>
    );
}

export default Home;
