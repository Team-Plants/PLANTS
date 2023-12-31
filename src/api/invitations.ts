import axios from 'axios';

export async function getInvitations() {
  const option = {
    endpoint: '/invitations',
    method: 'GET',
  };

  const result = await axios.post('api/withAuthHandler', option);
  return result.data;
}

export async function putInvitations(invitationId?: number, content?: boolean) {
  const option = {
    endpoint: `/invitations${invitationId ? `/${invitationId}` : ''}`,
    method: 'PUT',
    data: {
      inviteAccepted: content,
    },
  };

  const result = await axios.post('api/withAuthHandler', option);
  return result.data;
}
