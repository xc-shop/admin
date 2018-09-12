/*
* @Author: Zenquan
* @Date:   2018.08.06 17:36
*/

import React from 'react';
import { Link } from 'react-router-dom';
import Util from 'util/index.jsx';
import Static from 'service/static-service.jsx'

const _Util = new Util();
const _static = new Static();

import './index.scss';

import PageTitle from 'component/page-title/index.jsx';
/**
 * 首页组件
 *
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component {
    constructor(props){
        super(props);
        // 数据面板的状态管理
        this.state = {
            userCount: '-',
            productCount: '-',
            orderCount: '-'
        }
    }
    // 挂载后
    componentDidMount(){
        this.loadCount();
    }
    // 获取数据来显示
    loadCount(){
        _static.getHomeCount().then(res=>{
            this.setState(res);
        }, errMsg=>{
            _Util.errorTips(errMsg);
        })
    }
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="首页"/>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/user" className="color-box brown">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>用户总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/product" className="color-box green">
                            <p className="count">{this.state.productCount}</p>
                            <p className="desc">
                                <i className="fa fa-list"></i>
                                <span>商品总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/order" className="color-box blue">
                            <p className="count">{this.state.orderCount}</p>
                            <p className="desc">
                                <i className="fa fa-check-square-o"></i>
                                <span>订单总数</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;