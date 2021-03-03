import React, {Component} from "react";
import {Modal} from 'antd-mobile';

const {alert} = Modal;

class App extends Component {
  constructor(props) {
    super(props);
    const {onChange} = props;
    const UserAgent = navigator.userAgent.toLowerCase();
    let insideApp = true;
    if (UserAgent.includes('line') || UserAgent.includes('fb')) {
      insideApp = false
    }
    this.state = {
      insideApp
    }
    onChange && onChange(insideApp);
  }

  componentDidMount() {
    // URL Scheme校驗
    const {insideApp} = this.state;
    const {onChange} = this.props;

    if (insideApp === false) {
      alert('即將打開YYsports App', '', [
        {
          text: '取消',
          onPress: () => {
            onChange && onChange(true);
            this.setState({
              insideApp: true
            })
          },
          style: 'default'
        },
        {
          text: '允許',
          onPress: () => {
            this.jumpToApp();
          }
        },
      ]);
    }
  }

  jumpToApp() {
    const u = navigator.userAgent;
    if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
      window.location.href = `iOSYYSports://${window.location.href}`;
      window.setTimeout(function () {
        window.location.href = "https://apps.apple.com/cn/app/yysports/id1477928468";
      }, 3000);
    } else {
      window.location.href = `yysports://data/${window.location.href}`;
      const initialTime = new Date();
      let counter = 0;
      let waitTime = 0;
      const checkOpen = setInterval(() => {
        counter++;
        waitTime = new Date() - initialTime;
        if (waitTime > 1500) {
          clearInterval(checkOpen);
          window.location.href = "https://play.google.com/store/apps/details?id=com.pousheng.yysports";
        }
        if (counter < 1000) {
          return;
        }
        const hide = document.hidden || document.webkitHidden;
        if (!hide) {
          window.location.href = "https://play.google.com/store/apps/details?id=com.pousheng.yysports";
        }
      }, 20);
      document.addEventListener('visibilitychange', () => {
        const isHidden = document.hidden || document.webkitHidden;
        if (isHidden) {
          clearInterval(checkOpen);
        }
      });
    }
  }

  render() {
    const {children} = this.props;
    return (
      <>
        {children}
      </>
    );
  }
}

export default App;
