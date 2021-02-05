import React from 'react';
import './Table.css';

const shade = 'box shade '
const box = 'box '

const Table = (props) => {
  const square = props.size ** 0.5;
  const rows = [];
  for (let r = 0; r < props.size; r++) {
    const cols = [];
    for (let c = 0; c < props.size; c++) {
      const value = r * props.size + c;
      const id = `box_${value}`
      const Y = Math.floor(r / square);
      const X = Math.floor(c / square);
      cols.push(
        <input 
          type='text' 
          id={id}
          className={(((X + Y) % 2 === 0) ? shade : box).concat(props.color[value])}
          onChange={props.onInputChange}
          placeholder="0"
          value={props.sudoku[value]}
          onClick={props.onInputClick}
        />)
    }
    rows.push(cols);
  }

  const myStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.size}, auto)`,
    height: "0",
    paddingBottom: "100%"
  }

  return (
    <div className='container'>
      <div className='table'
        style={myStyle}
      >
        {rows}
      </div>
    </div>
  );
}

export default Table;