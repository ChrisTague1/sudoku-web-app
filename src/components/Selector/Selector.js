import React from 'react';
import './Selector.css';

const Selector = (props) => {
  return (
    <div>
      <button
        onClick={props.changeSolution}
        id='down'
        className='small'
      >
        &larr;
      </button>
      <button onClick={props.selectSolution}>
        Solution number:
      </button>
      <input 
        type="text"
        className='selector'
        onChange={props.selectorInputChange}
        value={props.display}
        placeholder={props.placeholder}
      />
      <button
        onClick={props.changeSolution}
        id='up'
        className='small'
      >
        &rarr;
      </button>
    </div>
  );
}

export default Selector;