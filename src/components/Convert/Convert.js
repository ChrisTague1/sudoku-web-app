import React from 'react';

const Convert = (props) => {
  return (
    <div>
      <button
        onClick={props.onConvertClick}
      >Turn Blue</button>
    </div>
  );
}

export default Convert;