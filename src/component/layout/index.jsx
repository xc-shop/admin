/*
* @Author: Jomsou
* @Date:   2018.08.06 17:36
*/  

import React from 'react';

import TopNav from 'component/top-nav/index.jsx';
import SideNav from 'component/side-nav/index.jsx';

// 引入主题样式
import './theme.css'
/**
 * 整体公用布局组件
 * 
 * @class Layout
 * @extends {React.Component}
 */
class Layout extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper">
                {/* 头部导航 */}
                <TopNav />
                {/* 侧边导航 */}
                <SideNav />
                {/* 为了可以使用标签对,eg:<Layout></Layout> */}
                {this.props.children}
            </div>
        )
    }
}

export default Layout;