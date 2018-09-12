import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            data: 'old props'
        }
    }
    handleClick(){
        this.setState({
            data: 'new props'
        })
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(){

        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render(){
        console.log('render');
        return (
           <div>
               <h1>App</h1>
               <p>This is {this.state.data}</p>
               <button onClick={()=>{this.handleClick()}}>改变props</button>
           </div>   
        ) 
    }

}
class App extends React.Component{
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            data: 'old data'
        }
    }
    onPropsChange(){
        this.setState({
            data: 'new data'
        })
    }
    render(){
        return (
            <div>
                <Child data={this.state.data}/>
                <button onClick={()=>{this.onPropsChange()}}>更新组件</button>
            </div>        
        )
    }
}
ReactDOM.render(
    <App/>
,document.getElementById('app'))