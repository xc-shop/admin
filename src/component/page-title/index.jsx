/*
* @Author: Jomsou
* @Date:   2018.08.06 17:36
*/  

import React from 'react';
/**
 * 页面标题组件
 * 
 * @class PageTitle
 * @extends {React.Component}
 */
class PageTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    // 将要挂载
    componentWillMount() {
        document.title = this.props.title + '- 小菜水果店';
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default PageTitle;