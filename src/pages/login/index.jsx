import React from 'react';
import Util from 'util/index.jsx';

const _Util = new Util;

import './index.scss'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onUserInputChange(e){
        let inputValue = e.target.value, 
            inputName = e.target.name;
        this.setState({
            [inputName]: inputValue
        })
    }
    //提交表单
    onSubmit(){
        _Util.request({
            type: 'psot',
            url: '/manage/user/login.do',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        }).then((res)=>{

        }, (err)=>{

        })
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading"><h3>小菜水果店管理系统</h3></div>
                    <div className="panel-heading"><p>欢迎登录</p></div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text" 
                                    name="username"
                                    className="form-control" 
                                    placeholder="用户名" 
                                    onChange={e=>this.onUserInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="密码" 
                                    onChange={e=>this.onUserInputChange(e)}/>
                            </div>
                            <button className="btn btn-lg btn-block btn-primary"
                            onClick={e=>this.onSubmit(e)}>登录</button>
                        </div>
                    </div>
                    </div>
                </div>
                )
            }
        }
        
export default Login;