import  {Component} from 'react';
import {setLocale} from 'umi';
import Header from '@/components/Header';
import App from '@/components/App';


class BlankLayout extends Component {
  constructor(props) {
    super(props);
    setLocale('zh-CN');
    this.state = {
      hideHeader: window.localStorage.getItem('hideHeader'),
      login: false
    }
  }

  componentDidMount(){
      console.log("进入页面");
      const {
        location: {
          query: {
            hideHeader,
          },
        },
      } = this.props;
      if(window.location.href.indexOf('ssoRedirect')<0){
        localStorage.setItem('currentUrl', window.location.href);
      }
      if (typeof hideHeader === 'string') {
        window.localStorage.setItem('hideHeader', hideHeader);
        this.setState({
          hideHeader :hideHeader
        });
      }
  }
  

 

  render() {
    const {
      children,
      location: {pathname},
      route: {
        routes = [],
      }
    } = this.props;
    const {hideHeader, login} = this.state;
    return (
      <App >
        {
           
            <div>
              {
                hideHeader === 'false' ? (
                  <Header
                    routes={routes}
                    pathname={pathname}
                  />
                ) : null
              }
              {children}
            </div>
          
        }
      </App>
    )

  }
}

export default BlankLayout;
