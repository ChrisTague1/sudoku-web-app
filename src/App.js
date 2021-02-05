import React, { Component } from 'react';
import Table from './components/Table/Table';
import Button from './components/Button/Button';
import Selector from './components/Selector/Selector';
import Size from './components/Size/Size';
import Convert from './components/Convert/Convert';
import './App.css';

class Sudoku {
  constructor(sudoku, runLimit) {
    this.sudoku = sudoku;
    this.runLimit = runLimit;
    this.size = this.sudoku.length;
    this.square = this.size ** 0.5;
    this.solutions = 0;
    this.answer = []
  }

  sudokuToString = () => {
    const arr = [];
    for (let r = 0; r < this.size; r++) {
      arr.push(...this.sudoku[r])
    }
    return arr.map(x => x.toString());
  }

  NumInRow = (num, row) => this.sudoku[row].includes(num)
  
  NumInCol = (num, col) => {
    for (let i = 0; i < this.size; i++) {
      if (this.sudoku[i][col] === num) return true;
    }
    return false;
  }

  NumInBox = (num, row, col) => {
    const StartY = Math.floor(row / this.square) * this.square;
    const StartX = Math.floor(col / this.square) * this.square;
    for (let r = StartY; r < StartY + this.square; r++) {
      for (let c = StartX; c < StartX + this.square; c++) {
        if (this.sudoku[r][c] === num) return true;
      }
    }
    return false;
  }

  Solve = () => {
    if (this.solutions < this.runLimit) {
      for (let r = 0; r < this.size; r++) {
        for (let c = 0; c < this.size; c++) {
          if (this.sudoku[r][c] === 0 || this.sudoku[r][c] > this.size) {
            for (let n = 1; n <= this.size; n++) {
              if (!this.NumInBox(n, r, c) && !this.NumInRow(n, r) && !this.NumInCol(n, c)) {
                this.sudoku[r][c] = n;
                ++this.totalRecursion;
                this.Solve();
                this.sudoku[r][c] = 0;
              }
            }
            return;
          }
        }
      }
      ++this.solutions;
      this.answer.push(this.sudokuToString());
    }
  }

  ReportSolution = () => {
    this.Solve();
    return this.answer;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      size: 4,
      sudoku: [],
      runLimit: 10000,
      displaying: 0,
      solutions: [],
      selectorInput: "",
      numSolutions: 0,
      isSolved: false,
      color: []
    }
  }

  componentDidMount() {
    const sudoku = [];
    const color = [];
    for (let i = 0; i < this.state.size ** 2; i++) {
      sudoku.push("");
      color.push("isGreen");
    }
    this.setState({
      sudoku,
      color
    })
  }


  onInputChange = (event) => {
    let { id, value } = event.target;
    if (isFinite(value) && value !== " ") {
      const index = parseInt(id.split("_")[1]);
      let { sudoku, color } = this.state;
      sudoku[index] = value;
      color[index] = "isBlue"
      this.setState({ sudoku, color })
    } else {
      alert(`${value} is not a number`);
      this.onInputClick(event);
    }
  }

  onInputClick = (event) => {
    const index = parseInt(event.target.id.split("_")[1]);
    let { sudoku, color } = this.state;
    sudoku[index] = "";
    color[index] = "isGreen";
    this.setState({ sudoku, color });
  }

  onSolveButton = () => {
    const solver = new Sudoku(this.convertToList(), this.state.runLimit);
    const solutions = solver.ReportSolution();
    if (solutions.length !== 0) {
      this.setState({
        solutions: solutions,
        numSolutions: solutions.length - 1,
        isSolved: true,
        selectorInput: "",
        displaying: 0
      },
        () => {
          this.updateSudoku();
        }
      )
    } else {
      alert("This sudoku cannot be solved");
      this.onResetButton();
    }
  }

  onResetButton = () => {
    const sudoku = [];
    const color = [];
    for (let i = 0; i < this.state.size ** 2; i++) {
      sudoku.push("");
      color.push("isGreen");
    }
    this.setState({
      sudoku,
      displaying: 0,
      solutions: [],
      selectorInput: "",
      numSolutions: 0,
      color
    })
  }

  convertToList = () => {
    const sudoku = [];
    for (let r = 0; r < this.state.size; r++) {
      const row = [];
      for (let c = 0; c < this.state.size; c++) {
        if (this.state.sudoku[r * this.state.size + c] !== "") {
          row.push(parseInt(this.state.sudoku[r * this.state.size + c]))
        } else row.push(0);
      }
      sudoku.push(row);
    }
    return sudoku;
  }

  changeSolution = (event) => {
    if (event.target.id ==='up') {
      if (this.state.displaying < this.state.solutions.length - 1) {
        this.setState((prev, props) => ({
          displaying: ++prev.displaying
        }))
        this.updateSudoku();
      }
    } else if (this.state.displaying > 0) {
      this.setState((prev, props) => ({
        displaying: --prev.displaying
      }))
      this.updateSudoku();
    }
  }

  updateSudoku = () => {
    this.setState((prev, props) => ({
      sudoku: prev.solutions[prev.displaying]
    }))
  }

  selectorInputChange = (event) => {
    this.setState({
      selectorInput: event.target.value
    })
  }

  selectSolution = () => {
    let { selectorInput, numSolutions, isSolved } = this.state;
    if (selectorInput !== "" && isSolved) {
      if (!isNaN(selectorInput)) {
        selectorInput = parseInt(selectorInput);
        if (0 > selectorInput) selectorInput = 0;
        if (selectorInput > numSolutions) selectorInput = numSolutions;
        this.setState({
          displaying: selectorInput,
          selectorInput: ""
        });
        this.updateSudoku();
      } else {
        alert("Enter a number");
        this.setState({
          selectorInput: ""
        })
      }
    }
  }

  sizeChange = (event) => {
    this.setState({
      size: parseInt(event.target.value),
      sudoku: []
    },
      () => {
        this.onResetButton();
        this.componentDidMount();
      }
    )
  }

  onConvertClick = () => {
    let color = this.state.color;
    for (let i = 0; i < this.state.size ** 2; i++) {
      if (this.state.sudoku[i] !== "") {
        color[i] = "isBlue"
        this.setState({ color })
      }
    }
  }

  render() {
    return (
      <div className='App'>
        <Table 
          size={this.state.size}
          onInputChange={this.onInputChange}
          onInputClick={this.onInputClick}
          sudoku={this.state.sudoku}
          color={this.state.color}
        />
        <Button 
          onSolveButton={this.onSolveButton}
          onResetButton={this.onResetButton}
        />
        <Selector 
          changeSolution={this.changeSolution}
          selectSolution={this.selectSolution}
          selectorInputChange={this.selectorInputChange}
          display={this.state.selectorInput}
          placeholder={this.state.displaying}
        />
        <Size sizeChange={this.sizeChange}/>
        <Convert onConvertClick={this.onConvertClick}/>
      </div>
    );
  }
}

export default App;
