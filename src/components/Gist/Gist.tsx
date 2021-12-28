import React, { ReactElement, useEffect, useState } from 'react';
import Avatar from '../Avatar/Avatar';
import './index.css';

const Gist = (props: {
  data: { forks_url: string; files: {}; id: string; created_at: string; url: string };
  getId: (arg0: string) => void;
}): ReactElement => {
  const fileLanguages = [...new Set<string>(Object.values(props.data.files).map((file: any) => file.language))];
  const forksUrl = props.data.forks_url;
  const [forks, setForks] = useState([]);

  useEffect(() => {
    const getForks = async (): Promise<void> => {
      try {
        const data = await fetch(forksUrl).then(res => res.json());

        const sorted = data
          .sort(
            (first: { created_at: string }, second: { created_at: string }) =>
              Date.parse(first.created_at) - Date.parse(second.created_at),
          )
          .slice(0, 3);
        setForks(sorted);
      } catch (e) {
        console.log(e);
      }
    };
    getForks();
  }, []);

  return (
    <div
      className='gistDiv'
      onClick={() => {
        props.getId(props.data.id);
      }}
    >
      <h3>id: {props.data.id}</h3>
      <p>url: {props.data.url}</p>
      <p>created at: {props.data.created_at}</p>
      <p>forks url: {props.data.forks_url}</p>
      <div>
        {fileLanguages.map(language => {
          return (
            <span key={language} className='fileTagDiv'>
              {language}
            </span>
          );
        })}
      </div>
      {forks.length > 0 ? <h2>Last three forkers:</h2> : <h2>No forkers found</h2>}

      {forks &&
        forks.map((fork: any) => {
          return <Avatar key={fork.owner.id} url={fork.owner.avatar_url} />;
        })}
    </div>
  );
};

export default Gist;
