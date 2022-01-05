import React, { MouseEventHandler, ReactElement } from 'react';
import './index.css';

const GistDetails = (props: { data: {}; handleBack: MouseEventHandler }): ReactElement => {
  const gistDetails = JSON.stringify(JSON.parse(JSON.stringify(props.data)), null, 2);

  return (
    <div className='gistDetailsDiv'>
      <pre className='gistDetailsPre'>{gistDetails}</pre>
      <button className='backButton' onClick={props.handleBack}>
        Back
      </button>
    </div>
  );
};

export default GistDetails;
