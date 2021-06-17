import React, { lazy, Component, Suspense } from "react";
import {
  withRouter,
  Router,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { Spin, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { history } from "utils";
import random from "number-random";

const routes: Array<{ component: any; path?: string }> = [
  {
    component: lazy(() => import(/* webpackChunkName: "home" */ "pages/Home")),
    path: "/",
  },
  {
    component: lazy(
      () => import(/* webpackChunkName: "login" */ "pages/Login")
    ),
    path: "/login",
  },
  {
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "table-basicTable" */ "pages/Table/BasicTable"
        )
    ),
    path: "/table/basicTable",
  },
  {
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "table-advancedTable" */ "pages/Table/AdvancedTable"
        )
    ),
    path: "/table/advancedTable",
  },
  {
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "table-asynchronousTable" */ "pages/Table/AsynchronousTable"
        )
    ),
    path: "/table/asynchronousTable",
  },
  {
    component: lazy(
      () => import(/* webpackChunkName: "not-found" */ "pages/NotFound")
    ),
  },
];

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
class AppRouter extends Component<RouteComponentProps> {
  render() {
    return (
      <Router history={history}>
        <Suspense
          fallback={
            <Space size="large" className="loading all-center">
              <Spin indicator={antIcon} size="large" tip="加载中" />
            </Space>
          }
        >
          <Switch>
            {routes &&
              routes.map(
                (route: { component: any; path?: string }, index: number) => {
                  const key = random(100, 999),
                    { component, path } = route;
                  return (
                    <Route
                      path={path}
                      key={key}
                      exact={!index ? true : false}
                      component={component}
                    ></Route>
                  );
                }
              )}
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default withRouter(AppRouter);
