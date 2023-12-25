import { instance } from '@/libs/api';

export async function getInvitations() {
  const response = await instance.get('/invitations');
  return response.data;
}
