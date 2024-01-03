import axios from 'axios';

export async function getPaginationMembers(
  page: number,
  size: number,
  dashboardId: number,
) {
  const option = {
    endpoint: '/members',
    method: 'GET',
    params: {
      page: page,
      size: size,
      dashboardId: dashboardId,
    },
  };
  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function getMembers(dashboardId: string) {
  const option = {
    endpoint: `/members`,
    method: 'GET',
    params: {
      dashboardId,
    },
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function DeleteMember(memberId: string) {
  const option = {
    endpoint: `/members/${memberId}`,
    method: 'DELETE',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result;
}
