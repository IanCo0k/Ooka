import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import { blogList } from '../../config/data';
import { Helmet } from 'react-helmet'
import styles from './styles.css';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList[0].id > blogList[blogList.length-1].id ? blogList : blogList.reverse());


  // Search for blog by category
  const handleSearchResults = (searchResult) => {

    const filteredBlogs = blogList.filter((blog) =>
      blog.category.toLowerCase().includes(searchResult.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    handleSearchResults('');
  };

  return (
    <div>
      <Helmet>
        <title>
          Tuesday Night Takes
        </title>
      </Helmet>

        <div>
          <Header />
          <div className='navbar'>
            <p onClick={() => handleSearchResults('NBA')}>NBA</p>
            <p onClick={() => handleSearchResults('NCAA')}>NCAA</p>
            <p onClick={() => handleClearSearch()}>ALL</p>
          </div>
        </div>

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
