import { instance } from '@/libs/api';
import axios, { AxiosError } from 'axios';

export async function getDashboards() {
  const response = await instance.get('/dashboards');
  return response.data;
}

export async function postDashboardsInvitations(
  dashboardId: string,
  data: object,
) {
  const option = {
    endpoint: `/dashboards/${dashboardId}/invitations`,
    method: 'POST',
    data: data,
  };
  try {
    const response = await axios.post('/api/withAuthHandler', option);
    return response;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
}
