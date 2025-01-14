import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:category" element={<Category />} />
                <Route path="/news/:id" element={<Article />} />
            </Routes>
        </Router>
    );
}

export default App;
