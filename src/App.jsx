import React from 'react';
import './App.css';
import Home from './pages/Home/index';
import Blog from './pages/Blog/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:id" exact element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
