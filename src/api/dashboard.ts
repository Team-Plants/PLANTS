import axios, { AxiosError } from 'axios';

type Method = 'pagination' | 'infiniteScroll';

export async function getDashboards(
  navigationMethod: Method,
  size: number,
  page?: number,
  cursorId?: number,
) {
  const option = {
    endpoint: '/dashboards',
    method: 'GET',
    params: {
      navigationMethod,
      page,
      size,
      cursorId,
    },
  };

  const result = await axios.post('api/withAuthHandler', option);
  return result.data;
}

export async function getDashboard(id: string) {
  const option = {
    endpoint: `/dashboards/${id}`,
    method: 'GET',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function getSideMenuDashboards(
  size: number,
  cursorId: number | undefined,
) {
  const option = {
    endpoint: '/dashboards',
    method: 'GET',
    params: {
      navigationMethod: 'infiniteScroll',
      size: size,
      cursorId: cursorId,
    },
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function postDashboards(title: string, color: string) {
  const data = {
    title,
    color,
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
  data: object,
  dashboardId?: string,
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

export async function putDashboard(
  dashboardId: string,
  title: string,
  color: string,
) {
  const data = {
    title: title,
    color: color,
  };
  const option = {
    endpoint: `/dashboards/${dashboardId}`,
    method: 'PUT',
    data: data,
  };
  try {
    const response = await axios.post('/api/withAuthHandler', option);
    if (response.status === 200) {
      alert('대시보드 수정이 완료되었습니다.');
    }
    return response.data;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
}

export async function deleteDashboard(dashboardId: string) {
  const option = {
    endpoint: `/dashboards/${dashboardId}`,
    method: 'DELETE',
  };
  try {
    const response = await axios.post('/api/withAuthHandler', option);
    if (response.status === 204) {
      alert('대시보드 삭제가 완료되었습니다.');
      return true;
    }
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      alert(e);
      return false;
    }
  }
}
