/*
* @Author: Jomsou
* @Date:   2018.08.06 17:36
*/  

import React from 'react';
/**
 * 侧边导航组件
 * 
 * @class SideNav
 * @extends {React.Component}
 */
class SideNav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">

                        <li>
                            <a className="active-menu" href="dist/index.html"><i className="fa fa-dashboard"></i>首页</a>
                        </li>
                        <li>
                            <a href="#product"><i className="fa fa-list"></i>商品<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li>
                                    <a href="#">商品管理</a>
                                </li>
                                <li>
                                    <a href="#">品类管理</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#product-category"><i className="fa fa-check-square"></i>订单<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li>
                                    <a href="#">订单管理</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#user-category"><i className="fa fa-user-o"></i>用户<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li>
                                    <a href="#">用户管理</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>

            </div>
        )
    }
}

export default SideNav;