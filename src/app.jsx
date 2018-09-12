/*
* @Author: Zenquan
* @Date:   2018.08.06 17:36
*/

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Layout from 'component/layout/index.jsx'
import Home from 'pages/home/index.jsx'
import ProductRouter from 'pages/product/router.jsx'
import Login from 'pages/login/index.jsx'
import OrderList from 'pages/order/index.jsx'
import OrderDetail from 'pages/order/detail.jsx'
import UserList from 'pages/user/index.jsx'
import ErrorPage from 'pages/error/index.jsx'
/**
 * 入口组件
 *
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
  render () {
    // 路由布局
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={ProductRouter} />
          <Route path="/product-category" component={ProductRouter} />
          <Route path="/order/index" component={OrderList} />
          <Route path="/order/detail/:orderNumber" component={OrderDetail} />
          <Route path="/user/index" component={UserList} />
          <Redirect exact from="/order" to="/order/index" />
          <Redirect exact from="/user" to="/user/index" />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    )
    return (
      <Router>
        {/* 路由选择跳转 */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => LayoutRouter} />
        </Switch>
      </Router>
    )
  }
}
// DOM树渲染
ReactDOM.render(<App />, document.getElementById('app'))
