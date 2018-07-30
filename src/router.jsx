import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class A extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>Component A</div>
        )
    }
}
class B extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>Component B</div>
        )
    }
}
class Wraper extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Link to="/a">组件A</Link>
                <br/>
                <Link to="/b">组件B</Link>
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <Wraper>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
        </Wraper>
    </Router>
    , document.getElementById('app'));