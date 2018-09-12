import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    onHandleClick() {
        this.props.onChangeBgColor('red');
    }
    render() {
        <div>
            <h2>参数： {this.props.bgColor}</h2>
            <button handleClick={color=>this.props.onHandleClick(color)}>修改颜色</button>
        </div>
    }
}
class Father extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: '#999'
        }
    }
    onChangeBgColor (){
        this.setSate({
            bgColor: color
        })
    }
    render() {
        return (
            <Child onChangeBgColor={color=>this.onChangeBgColor(color)}/>
        )
    }
}

ReactDOM.render(
    <Father />,
    document.getElementById('app'))