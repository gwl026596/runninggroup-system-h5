import { PureComponent } from "react";
import { connect } from 'dva';
class Detail extends PureComponent{

    componentDidMount(){
        console.log("进入详情页");
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

    render(){
        return <div>
            我的首页详情页
        </div>
    }
}
export default connect(({ home, loading }:any) => ({
    home, dataLoadting: loading.effects['home/getActivityList'],
  }))(Detail)   ;