import React from 'react';

const Size = (props) => {
  return (
    <div>
      <label for="size" >Select Sudoku Size: </label>
      <select
        name="size"
        id="size"
        onChange={props.sizeChange}
      >
        <option value="4">4</option>
        <option value="9">9</option>
        <option value="16">16</option>
      </select>
    </div>
  );
}

export default Size;