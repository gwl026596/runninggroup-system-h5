import { request } from 'umi';



export async function ssoRedirect(params: any): Promise<any> {
  return request('/api/sso/token'+params);
}

