/*
* @Author: Jomsou
* @Date:   2018.08.06 17:36
*/  

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
import Home from 'pages/home/index.jsx';
import Login from 'pages/login/index.jsx';
import UserList from 'pages/user/index.jsx';
import ErrorPage from 'pages/error/index.jsx';
/**
 * 入口组件
 * 
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
    render() {
        // 路由布局
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={Home}/>
                    <Route path="/product-category" component={Home}/>
                    <Route path="/user/index" component={UserList}/>
                    <Route exact form='/user' path="/user/index" component={UserList}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                {/* 路由选择跳转 */}
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={props=>LayoutRouter}/>
                </Switch>   
            </Router>
        )
    }
}
// DOM树渲染
ReactDOM.render(
    <App />
    , document.getElementById('app')
);