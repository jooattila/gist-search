import React, { ReactElement, useEffect, useState } from 'react';
import Gist from '../Gist/Gist';
import testData from '../../testData.json';

const GistList = (props: { username: any }): ReactElement => {
  const [gistList, setGistList] = useState<any>([]);

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

  return (
    <div>
      {gistList.map((gist: any) => {
        return (
          <div key={gist.id}>
            <Gist data={gist} />
          </div>
        );
      })}
    </div>
  );
};

export default GistList;
