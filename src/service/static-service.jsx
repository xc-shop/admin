import Util from 'util/index.jsx';
const _Util = new Util();

class Static {
    //首页数据统计
    getHomeCount(loginInfo){
        return _Util.request({
            url: '/manage/statistic/base_count.do'
        })
    }
}

export default Static;