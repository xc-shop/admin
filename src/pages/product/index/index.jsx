/*
* @Author: Jomsou
* @Date:   2018.08.06 20:48
*/

import React from "react";
import  { Link } from "react-router-dom";
import Util from "util/index.jsx";
import Product from "service/product-service.jsx";

import PageTitle from "component/page-title/index.jsx";
import LitSearch from "./index-list-search.jsx";
import TableList from "util/table-list/index.jsx";
import Pagination from "util/pagination/index.jsx";

import "./index.scss";

const _Util = new Util()
const _product = new Product()

/**
 * 用户列表组件
 *
 * @class UserList
 * @extends {React.Component}
 */
class ProductList extends React.Component {
  constructor (props) {
    super(props)
        this.state = {
      list: [],
      pageNum: 1,
      listType: 'list'
    }
  }
  // 组件挂载完成
  componentDidMount () {
    this.loadProductList()
    }
  // 加载商品列表
  loadProductList () {
    let listParam = {}
        listParam.listType = this.state.listType
        listParam.pageNum = this.state.pageNum

        // 如果是搜索的话，需要传入类型和关键字
        if (this.state.listType === 'search') {
      listParam.searchType = this.state.searchType
            listParam.keyword = this.state.keyword
        }
    // 获取商品列表后异步操作数据
    _product.getProductList(listParam).then(res => {
      this.setState(res)
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
        this.loadProductList()
        })
      }
  render () {
    let TableHeaders = [
      {name: '商品ID', width: '10%'},
      {name: '商品信息', width: '50%'},
      {name: '价格', width: '10%'},
      {name: '状态', width: '15%'},
      {name: '操作', width: '15%'}
    ]
        return (
      <div id="page-wrapper">
        <PageTitle title="商品列表">
          <div className="page-header-right">
            <Link to="/product/save" className="btn btn-primary">
              <i className="fa fa-plus"></i>
              <span>添加商品</span>
            </Link>
          </div>
        </PageTitle>
        <Pagination current={this.state.pageNum}
          total={this.state.total}
          onChange={pageNum => this.onPageNumChange(pageNum)}/>
      </div>
    )
  }
}

export default ProductList

