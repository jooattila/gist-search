import React, { ReactElement, useEffect, useState } from 'react';
import Gist from '../Gist/Gist';
import './index.css';

import GistDetails from '../GistDetails/GistDetails';

const GistList = (props: { username: string }): ReactElement => {
  const [gistList, setGistList] = useState<any>([]);
  const [gistId, setGistId] = useState('');

  const getId = (id: string) => {
    setGistId(id);
  };

  useEffect(() => {
    const getGists = async () => {
      try {
        const data = await fetch(`https://api.github.com/users/${props.username}/gists`).then(res => res.json());
        setGistList(data);
      } catch (e) {
        console.log(e);
      }
    };
    setGistId('');
    getGists();
  }, [props.username]);

  return (
    <div>
      {gistId !== '' ? (
        <GistDetails
          data={gistList.find((gist: { id: string }) => gist.id === gistId)}
          handleBack={() => {
            setGistId('');
          }}
        />
      ) : (
        <div className='resultDiv'>
          {gistList.map((gist: { id: string; forks_url: string; files: {}; created_at: string; url: string }) => {
            return (
              <div key={gist.id}>
                <Gist data={gist} getId={getId} />
              </div>
            );
          })}
        </div>
      )}

      {gistList.length === 0 && <h2 className='noResult'> No results found! </h2>}
    </div>
  );
};

export default GistList;
