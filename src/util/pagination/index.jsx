/*
* @Author: Zenquan
* @Date:   2018.08.06 17:36
*/

import React from 'react'
import RcPagination from 'rc-pagination'
import 'rc-pagination/dist/rc-pagination.min.css'
/**
 * 分页插件
 *
 * @class Pagination
 * @extends {React.Component}
 */
class Pagination extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <RcPagination {...this.props}
            hideOnSinglePage
            showQuickJumper/>
        </div>
      </div>
    )
  }
}

export default Pagination
