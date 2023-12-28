import axios from 'axios';

export async function getInvitations() {
  const option = {
    endpoint: '/invitations',
    method: 'GET',
  };

  const result = await axios.post('api/withAuthHandler', option);
  return result.data;
}
