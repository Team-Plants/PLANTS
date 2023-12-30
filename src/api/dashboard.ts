import axios, { AxiosError } from 'axios';

type Method = 'pagination' | 'infiniteScroll';

export async function getDashboards(
  navigationMethod: Method,
  size: number,
  cursorId?: number,
) {
  const option = {
    endpoint: '/dashboards',
    method: 'GET',
    params: {
      navigationMethod: navigationMethod,
      size: size,
      cursorId: cursorId,
    },
  };

  const result = await axios.post('api/withAuthHandler', option);
  return result.data;
}

export async function postDashboards(title: string, color: string) {
  const data = {
    title: title,
    color: color,
  };

  const option = {
    endpoint: '/dashboards',
    method: 'POST',
    data: data,
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
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
