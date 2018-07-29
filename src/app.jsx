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
// import './index.scss';
// let name = "Jomsou";
// let names = ['jomsou', 'marry', 'james']
// let flag = false;
// let jsx = (
//   <div className="jsx">
//     { flag ? <p> I am {name} </p> : <p> I am not {name}</p>} 
//     { names.map((name, index)=><p key={index}>Hello, I am {name}</p>)}
//   </div>
// );
//ES5
// function  Component() {
//   return <h1>I am Jomsou</h1>
// }
//ES6
class ES6component extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   name: 'Jomsou'
    // }
  }
  render(){
    // setTimeout(() => {
    //   this.setState({
    //     name: 'Jomsou Can'
    //   })
    // }, 2000);
    return <h1>I am {this.props.name}</h1>
  }
}
ReactDOM.render(
  <div>
    {/* <Component/> */}
    <ES6component name="Jomsou STC"/>
  </div>,
  document.getElementById('app')
);