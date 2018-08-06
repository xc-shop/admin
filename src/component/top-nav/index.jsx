/*
* @Author: Jomsou
* @Date:   2018.08.06 17:36
*/  

import React from 'react';
import { Link } from 'react-router-dom';
import Util from 'util/index.jsx';
import User from 'service/user-service.jsx'

const _Util = new Util();
const _user = new User();
/**
 * 头部导航组件
 * 
 * @class TopNav
 * @extends {React.Component}
 */
class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: _Util.getStorage('userInfo').username||''
        }
    }
    //退出登录
    onLogout(){
        _user.logout().then(res=>{
            _Util.removeStorage('userInfo');
            window.location.href = '/login'
        },errMsg=>{
            _Util.errorTips(errMsg);
        })
    }
    render() {
        return (
            <nav className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to='/'><b>小菜水果店</b></Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                        <i className="fa fa-user fa-fw"></i> 
                        {
                            // 通过判断username的状态
                            this.state.username
                            ?<span>欢迎，{this.state.username}</span>
                            :<span>欢迎您</span>
                        }
                        <i className="fa fa-caret-down"></i>    
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="#"><i className="fa fa-sign-out fa-fw"></i><span onClick={()=>{this.onLogout()}}>退出登录</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default TopNav;