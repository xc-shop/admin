/*
* @Author: Zenquan
* @Date:   2018.08.06 17:36
*/

import React from 'react';
import{Link} from 'react-router-dom';

import PageTitle from 'component/page-title/index.jsx';
/**
 * 错误处理组件
 *
 * @class Error
 * @extends {React.Component}
 */
class Error extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="出错了！" />
                <div className="row">
                    <div className="col-md-12">
                        <span>找不到该路径</span>
                        <Link to="/">点我返回首页</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Error;