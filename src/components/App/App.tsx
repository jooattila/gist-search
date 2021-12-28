import React, { useState } from 'react';
import GistList from '../GistList/GistList';
import Layout from '../Layout/Layout';
import Search from '../Search/Search';
import './index.css';

const App = (props: { children?: React.ReactChild[] | React.ReactChild }) => {
  const [username, setUsername] = useState('');

  const handleSearch = (data: string): void => {
    if (data) setUsername(data);
  };

  return (
    <Layout>
      <Search handleSearch={handleSearch} />
      {username && <GistList username={username} />}
    </Layout>
  );
};

export default App;
