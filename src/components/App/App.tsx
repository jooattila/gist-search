import React, { ReactElement, useState } from 'react';
import GistList from '../GistList/GistList';
import Layout from '../Layout/Layout';
import Search from '../Search/Search';

const App = (props: { children?: ReactElement[] | ReactElement }) => {
  const [username, setUsername] = useState('');

  const handleSearch: any = (data: string) => {
    if (data) setUsername(data);
  };

  return (
    <div>
      <Layout>
        {<Search handleSearch={handleSearch} />}
        {username && <GistList username={username} />}
      </Layout>
    </div>
  );
};

export default App;
