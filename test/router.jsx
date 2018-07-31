import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class A extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                Component A 
                {/* 参数： {this.props.match.params.id} */}
                <Switch>
                    <Route exact path={`${this.props.match.path}`} render={(route)=>{
                        return <div>当前组件是不带参数的A</div>
                    }}/>
                    <Route path={`${this.props.match.path}/sub`} render={(route)=>{
                        return <div>当前组件是带参数的sub</div>
                    }}/>
                    <Route path={`${this.props.match.path}/:id`} render={(route)=>{
                        return <div>当前组件是带参数的A，参数是： {route.match.params.id}</div>
                    }}/>
                </Switch>
            </div>
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
                <Link to="/a/123">带参数的组件A</Link>
                <br/>
                <Link to="/b">组件B</Link>
                <br/>
                <Link to="/a/sub">带参数的组件A</Link>
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