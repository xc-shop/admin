/*
* @Author: Jomsou
* @Date:   2018.08.06 17:36
*/  

import Util from 'util/index.jsx';
const _Util = new Util();
/**
 * 用户服务组件
 * 
 * @class User
 */
class User {
    // 用户登录
    login(loginInfo){
        return _Util.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }
    // 退出登录
    logout(){
        return _Util.request({
            type: 'post',
            url: '/user/logout.do'
        })
    }
    // 检查登录接口的数据是否合法
    checkLoginInfo(loginInfo){
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);
        if(typeof loginInfo.username!=="string" || loginInfo.username.length===0){
            return {
                status: false,
                msg: '用户名不能为空!'
            }
        }
        if(typeof loginInfo.password!=="string" || loginInfo.password.length===0){
            return {
                status: false,
                msg: '密码不能为空!'
            }
        }
        return {
            status: true,
            msg: '验证通过'
        }
    }
    // 获取用户列表
    getUserList(pageNum) {
        return _Util.request({
            type: 'post',
            url: '/manage/user/list.do',
            data: {
                pageNum: pageNum
            }
        })
    }
}

export default User;