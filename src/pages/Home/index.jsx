import React, { useState } from 'react';
import EmptyList from '../../components/common/emptyList';
import BlogList from '../../components/home/BlogList';
import Header from '../../components/home/Header';
import SearchBar from '../../components/home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults()

  }
  // search for blogs by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter(
      blog => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
      setBlogs(filteredBlogs);
  }

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  }

  return (
    <div>
        {/* Page Header */}
        <Header />

        {/* Search Brar */}
        <SearchBar 
          value={searchKey}
          clearSearch={handleClearSearch} 
          formSubmit={handleSearchSubmit} 
          handleSearchKey={e=>setSearchKey(e.target.value)} 
        />

        {/* Blog List & Empty List */}
        { !blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

    </div>
  );
};

export default Home;
