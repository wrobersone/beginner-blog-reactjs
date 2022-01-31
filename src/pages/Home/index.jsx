import React from 'react';
import BlogList from '../../components/home/BlogList';
import Header from '../../components/home/Header';
import SearchBar from '../../components/home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
  return (
    <div>
        {/* Page Header */}
        <Header />

        {/* Search Brar */}
        <SearchBar />

        {/* Blog List & Empty List */}
        <BlogList blogs={blogList} />

    </div>
  );
};

export default Home;
