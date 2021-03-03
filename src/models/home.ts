import { Reducer } from 'redux';
import { Effect } from 'dva';
import {
  getActivityList
} from '@/services/home';




import { refreshData } from '@/utils/defaultValue';

export interface GlobalModelState {
  venues: [];
  coaches: [];
  courses: [];
  list: [];
  activeData: any;
  reservedCard: [];
  availableCard: [];
  buyData: [];
  reservedList: [];
  myCards: [];
  courseType: {
    1: '活動';
    2: '舞蹈';
    3: '瑜伽';
    4: '核心';
    5: '塑身';
  };
  district: [];
  baseInfo: any;
  invoiceInfo: any;
}

export interface VenueModelType {
  namespace: 'home';
  state: GlobalModelState;
  effects: {
   
    getActivityList: Effect;
    
  };
  reducers: {
    refreshData: Reducer<GlobalModelState>;
  };
}

const VenueModel: VenueModelType = {
  namespace: 'home',

  state: {
    venues: [],
    coaches: [],
    courses: [],
    list: [], // 課程列表
    activeData: {},
    reservedCard: [],
    availableCard: [], // 课程可用卡片
    buyData: [],
    reservedList: [], // 我的預約課程列表
    myCards: [], // 我的全部卡片
    courseType: {
      1: '活動',
      2: '舞蹈',
      3: '瑜伽',
      4: '核心',
      5: '塑身',
    },
    district: [], // 地址選擇器
    baseInfo: {}, // 个人资料
    invoiceInfo: {
      invoiceType: 1,
      title: '',
      customeridentifier: '',
    }, // 发票信息
  },

  effects: {
    

    *getActivityList({ payload }, { call, put, select }) {
      const response = yield call(getActivityList, payload);
      if (response.statusCode === 200) {
        return response.body;
      }
      return false;
    },
   
  },

  reducers: {
    refreshData,
  },
};

export default VenueModel;
