import React from 'react';

const DetailedGist = (props: any) => {
  console.log(props.data);
  const data = JSON.stringify(props.data);
  const prettified = JSON.stringify(JSON.parse(data), null, 2);
  data;
  return (
    <div>
      <pre>{prettified}</pre>
      <button onClick={props.handleBack}>Back</button>
    </div>
  );
};

export default DetailedGist;
