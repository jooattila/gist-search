import React, { useEffect, useState } from 'react';
import FileTag from '../FileTag/FileTag';
import './index.css';

const Gist = (props: any) => {
  const languages = Object.values(props.data.files).map((file: any) => file.language);
  const uniqueLanguages = [...new Set<any>(languages)];
  const forksUrl = props.data.forks_url;
  const [forks, setForks] = useState([]);

  const getForks = async () => {
    try {
      setForks(await fetch(forksUrl).then(res => res.json()));
      forks.forEach((element: { created_at: any }) => {
        element.created_at = Date.parse(element.created_at);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const sorted = forks.sort((a: any, b: any) => (a.created_at < b.created_at ? 1 : -1)).slice(0, 3);

  return (
    <div className='gistDiv'>
      <h3>id: {props.data.id}</h3>
      <a href={props.data.url}>Url: {props.data.url}</a>
      <p>Created at: {props.data.created_at}</p>
      <a href={props.data.forks_url}>Forks url: {props.data.forks_url}</a>
      <p className='languageLabel'>Languages: </p>
      {uniqueLanguages.map(language => {
        return <FileTag language={language} key={language} />;
      })}
      <button onClick={getForks}>Get Forks</button>
      {sorted &&
        sorted.map((fork: any) => {
          console.log(fork.owner.login);
          return <h3 key={fork.owner.login}>username: {fork.owner.login}</h3>;
        })}
    </div>
  );
};

export default Gist;
