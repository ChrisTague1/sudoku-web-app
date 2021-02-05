import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onSolveButton}
      >
        Solve
      </button>
      <button
        onClick={props.onResetButton}
      >
        Reset
      </button>
    </div>
  );
}

export default Button;