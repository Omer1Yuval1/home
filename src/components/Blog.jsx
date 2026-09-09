import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";

import '../styles/blog.css';


const Blog = () => {
  
  const { darkMode } = useContext(ThemeContext);
  
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className={`publications_wrapper ${darkMode ? "publications_wrapper_dark" : ""}`}>
      <h2>My Blog</h2>
      <div className="blog_menu_wrapper">
        <button>My photography (coming soon)</button>
        <button>My thoughts (coming soon)</button>
      </div>
    </div>
  );
};

export default Blog;