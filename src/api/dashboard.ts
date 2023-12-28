import { instance } from '@/libs/api';
import axios from 'axios';

export async function getDashboards() {
  const response = await instance.get('/dashboards');
  return response.data;
}

export async function postDashboardsInvitations(
  dashboardId: string,
  data: object,
) {
  const option = {
    endpoint: `/dashboards/${dashboardId}/incitations`,
    method: 'POST',
    data: data,
  };
  const response = await axios.post('/api/withAuthHandler', option);
  return response;
}
