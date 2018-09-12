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
// let name = "Zenquan";
// let names = ['Zenquan', 'marry', 'james']
// let flag = false;
// let jsx = (
//   <div className="jsx">
//     { flag ? <p> I am {name} </p> : <p> I am not {name}</p>} 
//     { names.map((name, index)=><p key={index}>Hello, I am {name}</p>)}
//   </div>
// );
//ES5
// function  Component() {
//   return <h1>I am Zenquan</h1>
// }
//ES6
// class ES6component extends React.Component{
//   constructor(props){
//     super(props);
//     // this.state = {
//     //   name: 'Zenquan'
//     // }
//   }
//   render(){
//     // setTimeout(() => {
//     //   this.setState({
//     //     name: 'Zenquan Can'
//     //   })
//     // }, 2000);
//     return <h1>I am {this.props.name}</h1>
//   }
// }
// ReactDOM.render(
//   <div>
//     {/* <Component/> */}
//     <ES6component name="Zenquan STC"/>
//   </div>,
//   document.getElementById('app')
// );

class Child1 extends React.Component {
  constructor(props){
    super(props);
  }
  handleClick(){
    this.props.changeChild2Color('red');
  }
  render(){
    return (
      <div>
        <h1>child1：{this.props.bgColor}</h1>
        <button onClick={(e)=>this.handleClick(e)}>改变颜色</button>
      </div>
    )
  }
}
class Child2 extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div style={{background: this.props.bgColor}}>
        <h1>Child2：{this.props.bgColor}</h1>
      </div>
    )
  }
}
class Title extends React.Component {
  render(props){
    return <h1>{this.props.children}</h1>
  }
}
class Father extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bgColor: '#999'
    }
  }
  onChangeChild2Color(color){
    this.setState({
      bgColor: color
    })
  }
  render(){
    return (
      <div>
        <Child1 changeChild2Color={(color)=>this.onChangeChild2Color(color)}/> 
        <Child2 bgColor={this.state.bgColor}/> 
      </div>
    )
  }
}
ReactDOM.render(
  <div>
    <Father/>
  </div>,
  document.getElementById('app')
);