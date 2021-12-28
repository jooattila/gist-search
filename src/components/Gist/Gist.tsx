import React from 'react';
import FileTag from '../FileTag/FileTag';
import './index.css';

const Gist = (props: any) => {
  const languages = Object.values(props.data.files).map((file: any) => file.language);
  const unique = [...new Set<any>(languages)];

  return (
    <div className='gistDiv'>
      <h3>id: {props.data.id}</h3>
      <a href={props.data.url}>Url: {props.data.url}</a>
      <p>Created at: {props.data.created_at}</p>
      <a href={props.data.forks_url}>Forks url: {props.data.forks_url}</a>
      <p className='languageLabel'>Languages: </p>
      {unique.map(language => {
        return <FileTag language={language} key={language} />;
      })}
    </div>
  );
};

export default Gist;
