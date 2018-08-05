import React from 'react';
import './index.scss';

import PageTitle from 'component/page-title/index.jsx';

class Home extends React.Component {
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="首页">
                    <button className="btn btn-warning">test</button>
                </PageTitle>
                <div className="row">
                    <div className="col-md-12">

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;