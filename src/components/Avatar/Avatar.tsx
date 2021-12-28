import React from 'react';
import './index.css';

const Avatar = (props: { url: string }) => {
  return <img className='avatarImg' src={props.url} alt='' />;
};

export default Avatar;
