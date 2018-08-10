/*
* @Author: Jomsou
* @Date:   2018.08.06 17:36
*/

import React from "react";
import { Link } from "react-router-dom";
import Util from "util/index.jsx";
import User from "service/user-service.jsx";

import PageTitle from "component/page-title/index.jsx";
import Pagination from "util/pagination/index.jsx";

const _Util = new Util()
const _user = new User()

/**
 * 用户列表组件
 *
 * @class UserList
 * @extends {React.Component}
 */
class UserList extends React.Component {
  constructor (props) {
    super(props)
        this.state = {
      list: [],
      pageNum: 1,
      firstLoading: true
    }
  }
  // 组件挂载完成
  componentDidMount () {
    this.loadUserList()
    }
  // 加载用户列表
  loadUserList () {
    // 获取用户列表后异步操作数据
    _user.getUserList(this.state.pageNum).then(res => {
      this.setState(res, () => {
          this.setState({
            // 使得第一次加载时显示“正在加载中”
          firstLoading: false
        })
      })
    }, errorMsg => {
        this.setState({
        list: []
      })
            _Util.errorTips(errorMsg)
        })
    }
  // 改变页码数字
  onPageNumChange (pageNum) {
    this.setState({
      pageNum: pageNum
    }, () => {
        this.loadUserList()
        })
  );
  render () {
    let listBody = this.state.list.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.eamil}</td>
          <td>{user.phone}</td>
          <td>{new Date(user.createTime).toLocaleString()}</td>
        </tr>
      )
    })
        let listError = (
      <tr>
        <td colSpan="5" className="text-center">
          {this.state.firstLoading ? '正在加载数据...':'没有相应的结果'}</td>
      </tr>
    )
    let tableBody = this.state.list.length > 0 ? listBody:listError
        return (
      <div id="page-wrapper">
        <PageTitle title="用户列表" />
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>用户名</th>
                  <th>邮箱</th>
                  <th>电话</th>
                  <th>注册时间</th>
                </tr>
              </thead>
              <tbody>
                {
                  tableBody
                }
              </tbody>
            </table>
          </div>
        </div>
        <Pagination current={this.state.pageNum}
          total={this.state.total}
          onChange={pageNum => this.onPageNumChange(pageNum)}/>
      </div>
    )
  }
}

export default UserList

