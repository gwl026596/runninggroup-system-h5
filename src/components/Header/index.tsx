import React, {PureComponent} from 'react';
import {NavBar} from 'antd-mobile';
import {LeftOutlined,UserOutlined } from '@ant-design/icons';
import {history} from 'umi';
import {getPageTitle} from '@/utils/utils';
import styles from './index.less';

interface HeaderProps {
  pathname: string;
  routes: any[];
}

interface HeaderState {
  pageTitle: string;
}

class Header extends PureComponent<HeaderProps, HeaderState> {
  state = {
    pageTitle: '',
  }

  componentDidMount() {
    const routerMap = {};
    const {routes = []} = this.props;

    function getRouterMap(route: any[]) {
      route.forEach(v => {
        if (v.path) {
          routerMap[v.path] = `menu.${v.name}`;
        }

        if (v.routes) {
          getRouterMap(v.routes);
        }
      })
    }

    getRouterMap(routes);
    console.log(JSON.stringify(routerMap));
    
    window.localStorage.setItem('menuData', JSON.stringify(routerMap));
    this.setNavBarTitle();
  }

  componentDidUpdate(prevProps: HeaderProps) {
    const {pathname: oldPathname} = this.props;
    const {pathname} = prevProps;

    if (oldPathname !== pathname) {
      this.setNavBarTitle();
    }
  }

  setNavBarTitle = () => {
    const {pathname} = this.props;
    console.log(pathname);
    
    this.setState({
      pageTitle: getPageTitle(pathname),
    });
  }

  render() {
    const {pathname} = this.props;
    const {pageTitle} = this.state;
    return (
      <NavBar
        className={styles.header}
        leftContent={
          pathname === '/group/home'?
            null :<LeftOutlined />
        }
        // rightContent={/^\/coach/.test(pathname) ?
        //   null :
        //   <>
            
        //     <UserOutlined 
        //       onClick={() => history.push({
        //         pathname: '/customer/personal',
        //       })}
        //     />
        //   </>
        // }
        onLeftClick={() => history.goBack()}
      >
        {pageTitle}
      </NavBar>
    );
  }
}

export default Header;
