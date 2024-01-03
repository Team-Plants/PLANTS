import { instance } from '@/libs/api';
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

export async function getMembers(dashboardId: number) {
  const option = {
    endpoint: `/members?dashboardId=${dashboardId}`,
    method: 'GET',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function deleteMember(memberId: string) {
  const response = await instance.delete(`/members/${memberId}`);
  return response.data;
}

export async function DeleteMember(memberId: string) {
  const option = {
    endpoint: `/members/${memberId}`,
    method: 'DELETE',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result;
}
