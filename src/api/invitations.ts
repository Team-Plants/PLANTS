import axios from 'axios';

export async function getInvitations() {
  const option = {
    endpoint: '/invitations',
    method: 'GET',
  };

  const result = await axios.post('api/withAuthHandler', option);
  return result.data;
}

export async function getInvitationList(
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

export async function DeleteInvitation(
  dashboardId: string,
  invitationId: string,
) {
  const option = {
    endpoint: `/dashboards/${dashboardId}/invitations/${invitationId}`,
    method: 'DELETE',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result;
}
