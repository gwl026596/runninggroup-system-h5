import React from 'react';
import { ssoRedirect } from '@/services/ssoRedirect';

class SsoRedirect extends React.Component {
  componentDidMount() {
    let data = ssoRedirect(window.location.search);

    data.then(res => {
      //localStorage.setItem('token',res.data);

      location.href = String(localStorage.getItem('currentUrl'));
    })
  }
  render() {
    return (
      <></>
    )
  }
}

export default SsoRedirect;
