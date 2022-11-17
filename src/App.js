import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Navbar from './components/NavBar';
import Category from './components/Categories';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
