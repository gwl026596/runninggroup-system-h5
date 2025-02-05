import { request } from 'umi';
import URL from '@/utils/config';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}

// 获取当前用户信息
export async function getUserInfo(): Promise<any> {
  return request(`${URL.FCW}/login-user`);
}

