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
        return <Spiner loading={true}>
            <div onClick={() => {
            history.push({
                pathname: "/group/home/detail"
            })
           }}>
            我的首页
           </div>
        </Spiner>
    }
}
export default connect(({ home, loading }: any) => ({
    home, dataLoadting: loading.effects['home/getActivityList'],
}))(Home);