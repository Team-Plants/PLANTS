import axios from 'axios';

export async function getInvitations(
  page: number,
  size: number,
  dashboardId: string,
) {
  const option = {
    endpoint: `/dashboards/${dashboardId}/invitations`,
    method: 'GET',
    params: {
      page: page,
      size: size,
    },
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}
