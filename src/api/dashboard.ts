import { instance } from '@/libs/api';

export async function getDashboards() {
  const response = await instance.get('/dashboards');
  return response.data;
}
