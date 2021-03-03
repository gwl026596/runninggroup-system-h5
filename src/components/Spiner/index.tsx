import  {Component} from 'react';
import {Toast} from 'antd-mobile';

interface SpinerProps {
  loading: boolean | undefined;
  style?: any;
}

class Spiner extends Component<SpinerProps> {
  componentDidMount(): void {
    const {loading} = this.props;
    if (loading) {
      Toast.loading('Loading', 0);
    } else {
      Toast.hide();
    }
  }

  componentDidUpdate(
    prevProps: Readonly<SpinerProps>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    const {loading: oldLoading} = prevProps;
    const {loading} = this.props;
    if (oldLoading !== loading) {
      if (loading) {
        Toast.loading('Loading', 0);
      } else {
        Toast.hide();
      }
    }
  }

  render() {
    const {children, style} = this.props;
    return (
      <div style={style}>
        {children}
      </div>
    );
  }
}

export default Spiner;
