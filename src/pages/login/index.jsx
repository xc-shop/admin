import React from 'react';
import Util from 'util/index.jsx';
import User from 'service/user-service.jsx'

const _Util = new Util();
const _user = new User();

import './index.scss'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _Util.getUrlParam('redirect')||'/'
        }
    }
    componentWillMount() {
        document.title = '登录 - 小菜水果店';
    }

    onUserInputChange(e){
        let inputValue = e.target.value, 
            inputName = e.target.name;
        this.setState({
            [inputName]: inputValue
        })
    }
    onInputKeyUp(e){
        if(e.keyCode===13){
            this.onSubmit();
        }
    }
    //提交表单
    onSubmit(){
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        },
        checkResult = _user.checkLoginInfo(loginInfo);
        if(checkResult.status){
            _user.login(loginInfo).then((res)=>{
                this.props.history.push(this.state.redirect);
            }, (errMsg)=>{
                _Util.errorTips(errorMsg)
            })
        }else {
            _Util.errorTips(checkResult.msg);
        }     
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
                                    onKeyUp={e=>this.onInputKeyUp(e)}
                                    onChange={e=>this.onUserInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="密码" 
                                    onKeyUp={e=>this.onInputKeyUp(e)}
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