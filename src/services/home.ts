import { request } from 'umi';

import qs from 'qs';



// 课程詳情
export async function getActivityList(params: any) {
  return request(
    `/api/activity/list?${qs.stringify({
      ...params,
    })}`,
    {
      method: 'GET',
    },
  );
}

