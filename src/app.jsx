import React from 'react';
import ReactDOM from 'react-dom';

// import 'font-awesome/css/font-awesome.min.css'
// import './index.css';
// import './index.scss';

// ReactDOM.render(
//   <div>
    
//     <h1>Hello, world!</h1>,
//   </div>,
//   document.getElementById('app')
// );

// let style = {
//   color: 'r'+'ed',
//   fontSize: '30px'
// }
// let jsx = <div style={style}>jsx...</div>;
import './index.scss';
let name = "Jomsou";
let flag = false;
let jsx = (
  <div className="jsx">
    { flag ? <p> I am {name} </p> : <p> I am not {name}</p>} 
  </div>
);

ReactDOM.render(
  jsx, 
  document.getElementById('app')
);