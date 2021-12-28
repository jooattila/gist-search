import React, { ReactElement, useEffect, useState } from 'react';
import Gist from '../Gist/Gist';
import testData from '../../testData.json';
import DetailedGist from '../DetailedGist/DetailedGist';

const GistList = (props: { username: any }): ReactElement => {
  const [gistList, setGistList] = useState<any>([]);
  const [gistId, setGistId] = useState('');

  const getGists = async () => {
    try {
      //   fetch(`https://api.github.com/users/${props.username}/gists`).then(res => res.json());
      if (testData.length > 0) {
        setGistList(testData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useState(() => {
    getGists();
  });

  const getId = (id: string) => {
    setGistId(id);
  };

  return (
    <div>
      {gistId !== '' ? (
        <DetailedGist
          data={gistList.find((gist: { id: string }) => gist.id === gistId)}
          handleBack={() => {
            setGistId('');
          }}
        />
      ) : (
        gistList.map((gist: any) => {
          return (
            <div key={gist.id}>
              <Gist data={gist} getId={getId} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default GistList;
