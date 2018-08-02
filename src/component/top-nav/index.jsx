import React from 'react';
import { Link } from 'react-router-dom';
class TopNav extends React.Component {
    constructor(props) {
        super(props);
    }
    //退出登录
    render() {
        return (
            <nav className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to='/'><b>HAPPY</b>MMALL</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                        <i className="fa fa-user fa-fw"></i> 
                            <span>欢迎，adminxxx</span>
                        <i className="fa fa-caret-down"></i>    
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="#"><i className="fa fa-user fa-fw"></i><span>用户空间</span> </a>
                            </li>
                            <li><a href="#"><i className="fa fa-gear fa-fw"></i><span>设置</span> </a>
                            </li>
                            <li className="divider"></li>
                            <li><a href="#"><i className="fa fa-sign-out fa-fw"></i><span onClick={()=>{this.onLogout()}}>退出登录</span></a>
                            </li>
                        </ul>
                    </li>

                    {/* <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                            <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-tasks">
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong>Task 1</strong>
                                            <span className="pull-right text-muted">60% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                <span className="sr-only">60% Complete (success)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong>Task 2</strong>
                                            <span className="pull-right text-muted">28% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100">
                                                <span className="sr-only">28% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong>Task 3</strong>
                                            <span className="pull-right text-muted">60% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                <span className="sr-only">60% Complete (warning)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong>Task 4</strong>
                                            <span className="pull-right text-muted">85% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                <span className="sr-only">85% Complete (danger)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>See All Tasks</strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>

                    </li>

                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                            <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-alerts">
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-comment fa-fw"></i> New Comment
                                    <span className="pull-right text-muted small">4 min</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span className="pull-right text-muted small">12 min</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-envelope fa-fw"></i> Message Sent
                                    <span className="pull-right text-muted small">4 min</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-tasks fa-fw"></i> New Task
                                    <span className="pull-right text-muted small">4 min</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span className="pull-right text-muted small">4 min</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>See All Alerts</strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>

                    </li> */}

                    {/* <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                            <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                            </li>
                            <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                            </li>
                            <li className="divider"></li>
                            <li><a href="#"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                            </li>
                        </ul>

                    </li> */}

                </ul>
            </nav>
        )
    }
}

export default TopNav;