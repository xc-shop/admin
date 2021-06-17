import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from 'utils';
import { Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import random from 'number-random';

const routes: Array<{component: any, path?: string}> = [
  {
    component: lazy(() =>
      import(/* webpackChunkName: "home" */'pages/Home')),
    path: "/",
  },
  {
    component: lazy(() =>
      import(/* webpackChunkName: "login" */'pages/Login')),
    path: '/login'
  },
  {
    component: lazy(() =>
      import(/* webpackChunkName: "table-basicTable" */'pages/Table/BasicTable')),
    path: '/table/basicTable'
  },
  {
    component: lazy(() =>
      import(/* webpackChunkName: "not-found" */'pages/NotFound')),
  },
];

const antIcon = <LoadingOutlined style={{ fontSize: 24, }} spin />;

export default function AppRouter() {
  return (
    <Router history={history}>
      <Suspense fallback={
        <Space size="large" className="loading all-center">
          <Spin indicator={antIcon}
            size="large"
            tip="加载中"/>
        </Space>
      }>
        <Switch>
          {routes &&
            routes.map((
              route: { component: any; path?: string },
              index: number
            ) => {
              const key = random(100, 999),
                { component, path, } = route;
              return (<Route
                path={path}
                key={key}
                exact={!index ? true : false}
                component={component}
              ></Route>);
            })}
        </Switch>
      </Suspense>
    </Router>
  );
}
