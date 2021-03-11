import { PureComponent } from "react";
import { history } from 'umi'
import { connect } from 'dva';
import Spiner from "@/components/Spiner";
import { Loading } from '../../.umi/plugin-dva/connect';

class Home extends PureComponent {
    componentDidMount() {
        console.log("进入首页了");
        this.getActivityList();
    }

    async getActivityList() {
        const {
            dispatch,
        } = this.props;
        const payload = {
            activityName: "",
            year: "2021",
            activityStatus: 2,
            month: "01",
        }
        const result = await dispatch({
            type: 'home/getActivityList',
            payload,
        })
        console.log(result);

    }

    render() {
        return <Spiner loading={false}>
            <div onClick={() => {
            history.push({
                pathname: "/group/home/detail"
            })
           }}>
          <a href="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=353249336,1088977409&fm=26&gp=0.jpg" download><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=353249336,1088977409&fm=26&gp=0.jpg"/></a>
           </div>
        </Spiner>
    }
}
export default connect(({ home, loading }: any) => ({
    home, dataLoadting: loading.effects['home/getActivityList'],
}))(Home);