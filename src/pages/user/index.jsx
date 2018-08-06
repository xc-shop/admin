import React from 'react';
import{Link} from 'react-router-dom';

import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx'

class UserList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表" />
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>ID</th>
                                    <th>ID</th>
                                    <th>ID</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>123</th>
                                    <th>123</th>
                                    <th>123</th>
                                    <th>123</th>
                                    <th>123</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination current={10} total={200} onChange={pageNum=>console.log(pageNum)}/>
            </div>
        )
    }
}

export default UserList;