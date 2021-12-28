import React from 'react';
import './index.css';

const FileTag = (props: { language: string }) => {
  return <div className='fileTagDiv'>{props.language}</div>;
};

export default FileTag;
