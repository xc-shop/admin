import Util from 'util/index.jsx';
const _Util = new Util();

class User {
    //用户登录
    login(loginInfo){
        return _Util.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }
    //检查登录接口的数据是否合法
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
}

export default User;