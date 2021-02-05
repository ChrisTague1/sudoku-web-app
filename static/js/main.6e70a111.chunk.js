(this["webpackJsonpsudoku-web-app"]=this["webpackJsonpsudoku-web-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),s=n(1),u=n.n(s),i=n(4),a=n.n(i),r=(n(14),n(5)),c=n(8),l=n(6),d=n(7),h=n(3),p=(n(15),function(t){for(var e=Math.pow(t.size,.5),n=[],s=0;s<t.size;s++){for(var u=[],i=0;i<t.size;i++){var a=s*t.size+i,r="box_".concat(a),c=Math.floor(s/e),l=Math.floor(i/e);u.push(Object(o.jsx)("input",{type:"text",id:r,className:((l+c)%2===0?"box shade ":"box ").concat(t.color[a]),onChange:t.onInputChange,placeholder:"0",value:t.sudoku[a],onClick:t.onInputClick}))}n.push(u)}var d={display:"grid",gridTemplateColumns:"repeat(".concat(t.size,", auto)"),height:"0",paddingBottom:"100%"};return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"table",style:d,children:n})})}),f=(n(16),function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:t.onSolveButton,children:"Solve"}),Object(o.jsx)("button",{onClick:t.onResetButton,children:"Reset"})]})}),v=(n(17),function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:t.changeSolution,id:"down",className:"small",children:"\u2190"}),Object(o.jsx)("button",{onClick:t.selectSolution,children:"Solution number:"}),Object(o.jsx)("input",{type:"text",className:"selector",onChange:t.selectorInputChange,value:t.display,placeholder:t.placeholder}),Object(o.jsx)("button",{onClick:t.changeSolution,id:"up",className:"small",children:"\u2192"})]})}),j=function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{for:"size",children:"Select Sudoku Size: "}),Object(o.jsxs)("select",{name:"size",id:"size",onChange:t.sizeChange,children:[Object(o.jsx)("option",{value:"4",children:"4"}),Object(o.jsx)("option",{value:"9",children:"9"}),Object(o.jsx)("option",{value:"16",children:"16"})]})]})},k=function(t){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:t.onConvertClick,children:"Turn Blue"})})},g=(n(18),function t(e,n){var o=this;Object(h.a)(this,t),this.sudokuToString=function(){for(var t=[],e=0;e<o.size;e++)t.push.apply(t,Object(d.a)(o.sudoku[e]));return t.map((function(t){return t.toString()}))},this.NumInRow=function(t,e){return o.sudoku[e].includes(t)},this.NumInCol=function(t,e){for(var n=0;n<o.size;n++)if(o.sudoku[n][e]===t)return!0;return!1},this.NumInBox=function(t,e,n){for(var s=Math.floor(e/o.square)*o.square,u=Math.floor(n/o.square)*o.square,i=s;i<s+o.square;i++)for(var a=u;a<u+o.square;a++)if(o.sudoku[i][a]===t)return!0;return!1},this.Solve=function(){if(o.solutions<o.runLimit){for(var t=0;t<o.size;t++)for(var e=0;e<o.size;e++)if(0===o.sudoku[t][e]||o.sudoku[t][e]>o.size){for(var n=1;n<=o.size;n++)o.NumInBox(n,t,e)||o.NumInRow(n,t)||o.NumInCol(n,e)||(o.sudoku[t][e]=n,++o.totalRecursion,o.Solve(),o.sudoku[t][e]=0);return}++o.solutions,o.answer.push(o.sudokuToString())}},this.ReportSolution=function(){return o.Solve(),o.answer},this.sudoku=e,this.runLimit=n,this.size=this.sudoku.length,this.square=Math.pow(this.size,.5),this.solutions=0,this.answer=[]}),b=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this)).onInputChange=function(e){var n=e.target,o=n.id,s=n.value;if(isFinite(s)&&" "!==s){var u=parseInt(o.split("_")[1]),i=t.state,a=i.sudoku,r=i.color;a[u]=s,r[u]="isBlue",t.setState({sudoku:a,color:r})}else alert("".concat(s," is not a number")),t.onInputClick(e)},t.onInputClick=function(e){var n=parseInt(e.target.id.split("_")[1]),o=t.state,s=o.sudoku,u=o.color;s[n]="",u[n]="isGreen",t.setState({sudoku:s,color:u})},t.onSolveButton=function(){var e=new g(t.convertToList(),t.state.runLimit).ReportSolution();0!==e.length?t.setState({solutions:e,numSolutions:e.length-1,isSolved:!0,selectorInput:"",displaying:0},(function(){t.updateSudoku()})):(alert("This sudoku cannot be solved"),t.onResetButton())},t.onResetButton=function(){for(var e=[],n=[],o=0;o<Math.pow(t.state.size,2);o++)e.push(""),n.push("isGreen");t.setState({sudoku:e,displaying:0,solutions:[],selectorInput:"",numSolutions:0,color:n})},t.convertToList=function(){for(var e=[],n=0;n<t.state.size;n++){for(var o=[],s=0;s<t.state.size;s++)""!==t.state.sudoku[n*t.state.size+s]?o.push(parseInt(t.state.sudoku[n*t.state.size+s])):o.push(0);e.push(o)}return e},t.changeSolution=function(e){"up"===e.target.id?t.state.displaying<t.state.solutions.length-1&&(t.setState((function(t,e){return{displaying:++t.displaying}})),t.updateSudoku()):t.state.displaying>0&&(t.setState((function(t,e){return{displaying:--t.displaying}})),t.updateSudoku())},t.updateSudoku=function(){t.setState((function(t,e){return{sudoku:t.solutions[t.displaying]}}))},t.selectorInputChange=function(e){t.setState({selectorInput:e.target.value})},t.selectSolution=function(){var e=t.state,n=e.selectorInput,o=e.numSolutions,s=e.isSolved;""!==n&&s&&(isNaN(n)?(alert("Enter a number"),t.setState({selectorInput:""})):(0>(n=parseInt(n))&&(n=0),n>o&&(n=o),t.setState({displaying:n,selectorInput:""}),t.updateSudoku()))},t.sizeChange=function(e){t.setState({size:parseInt(e.target.value),sudoku:[]},(function(){t.onResetButton(),t.componentDidMount()}))},t.onConvertClick=function(){for(var e=t.state.color,n=0;n<Math.pow(t.state.size,2);n++)""!==t.state.sudoku[n]&&(e[n]="isBlue",t.setState({color:e}))},t.state={size:4,sudoku:[],runLimit:1e4,displaying:0,solutions:[],selectorInput:"",numSolutions:0,isSolved:!1,color:[]},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){for(var t=[],e=[],n=0;n<Math.pow(this.state.size,2);n++)t.push(""),e.push("isGreen");this.setState({sudoku:t,color:e})}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(p,{size:this.state.size,onInputChange:this.onInputChange,onInputClick:this.onInputClick,sudoku:this.state.sudoku,color:this.state.color}),Object(o.jsx)(f,{onSolveButton:this.onSolveButton,onResetButton:this.onResetButton}),Object(o.jsx)(v,{changeSolution:this.changeSolution,selectSolution:this.selectSolution,selectorInputChange:this.selectorInputChange,display:this.state.selectorInput,placeholder:this.state.displaying}),Object(o.jsx)(j,{sizeChange:this.sizeChange}),Object(o.jsx)(k,{onConvertClick:this.onConvertClick})]})}}]),n}(s.Component),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,o=e.getFID,s=e.getFCP,u=e.getLCP,i=e.getTTFB;n(t),o(t),s(t),u(t),i(t)}))};a.a.render(Object(o.jsx)(u.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),S()}],[[19,1,2]]]);
//# sourceMappingURL=main.6e70a111.chunk.js.map