/*
* @Author: Zenquan
* @Date:   2018.08.06 17:36
*/

import Util from 'util/index.jsx'
const _Util = new Util()
/**
 * 首页数据统计组件
 * @class Static
 */
class Static {
  // 首页数据统计
  getHomeCount (loginInfo) {
    return _Util.request({
      url: '/manage/statistic/base_count.do'
    })
  }
}

export default Static
