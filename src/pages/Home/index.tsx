import React, { FC, useEffect, useState, memo, MouseEvent } from 'react';
import { Menu, Layout } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useStore } from 'stores'
import { UserInfoType } from 'stores/login';
import style from './index.module.less'
import classNames from 'classnames';
import { home } from 'services';
import AppRouter from '../../router';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

type CompItemType =  {
  component: string,
  path: string,
  key: string,
  sub?: CompItemType[]
}

interface IHome {
  history: any
}

const Home: FC<IHome> = ({history}: IHome) => {
  const [collapsed, setCollapsed] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null)
  const [menus, setMenus] = useState<Array<CompItemType> | null>(null)
  const [currentRoute, setCurrentRoute] = useState('')
  const { loginStore } = useStore()
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const initUserInfo = (fn: Function) => {
    const userInfoStorage = localStorage.getItem('userInfo');
    const userInfo = userInfoStorage ? JSON.parse(userInfoStorage) : loginStore.getUserInfo();
    setUserInfo(userInfo)
    userInfo.roleType && fn && fn(userInfo.roleType)
  }

  const getMenus = async (roleType: number) => {
    const data = await home.menus({params: {roleType}});
    console.log('data>>>', data);
    if (data.ret === '0') {
      const {menus} = data.data
      setMenus(menus)
    }
  }
  const selectMenuItem = (path: string) => {
    history.push(path)
    setCurrentRoute(path)
  }

  useEffect(() => {
    initUserInfo(getMenus);
  }, [])

  return (
    <Layout>
      <Sider trigger={null} collapsible
          collapsed={collapsed}
          className={style['home']}>
        <Menu className={style['menus']}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            // inlineCollapsed={collapsed}
          >
            {
              menus && menus.map((menu: CompItemType) => {
                const {component, path, sub} = menu
                return (
                  <SubMenu key={path} icon={<MailOutlined />} title={component}>
                    {
                      sub && sub.map(((s: CompItemType) => {
                        const {component, path, key} = s
                        return (<Menu.Item key={key}
                                  onClick={e => selectMenuItem(path)}>
                                {component}
                              </Menu.Item>)
                      }))
                    }
                  </SubMenu>
                )
              })
            }
          </Menu>
      </Sider>
      <Layout className={style["site-layout"]}>
          <Header className={
              classNames(
                style["site-layout-background"],
                style['header']
              )}>
            {React.createElement(
                collapsed
                  ? MenuUnfoldOutlined
                  : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggleCollapsed,
            })}
            {
              userInfo && <img src={userInfo.avatar} alt=""
                className={style['avatar']}/>
            }
          </Header>
          <Content
            className={style["site-layout-background"]}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {
              (location.pathname === '' || location.pathname === '/')
                ? (
                  <p style={{ fontSize: 30, fontWeight: 500, margin: 20, }}>🐕 🐩 🐈 &nbsp;Welcome to React Admin!</p>
                ) : <AppRouter/>
            }
          </Content>
        </Layout>
    </Layout>
  );
};

export default memo(Home);