import React from 'react';

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
                            <a href="ui-elements.html"><i className="fa fa-desktop"></i>商品<span className="fa arrow"></span></a>
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
                            <a href="chart.html"><i className="fa fa-bar-chart-o"></i>数据分析</a>
                        </li>
                        {/* <li>
                            <a href="tab-panel.html"><i className="fa fa-qrcode"></i> Tabs &amp; Panels</a>
                        </li>

                        <li>
                            <a href="table.html"><i className="fa fa-table"></i> Responsive Tables</a>
                        </li>
                        <li>
                            <a href="form.html"><i className="fa fa-edit"></i> Forms </a>
                        </li> */}


                        <li>
                            <a href="#product-manager"><i className="fa fa-sitemap"></i>用户<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li>
                                    <a href="#">用户管理</a>
                                </li>
                                {/* <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link<span className="fa arrow"></span></a>
                                </li> */}
                            </ul>
                        </li>
                        {/* <li>
                            <a href="empty.html"><i className="fa fa-fw fa-file"></i> Empty Page</a>
                        </li> */}
                    </ul>

                </div>

            </div>
        )
    }
}

export default SideNav;