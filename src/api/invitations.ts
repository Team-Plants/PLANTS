import { instance } from '@/libs/api';

export async function getInvitations() {
  const response = await instance.get('/invitations', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQzLCJ0ZWFtSWQiOiIxLTUiLCJpYXQiOjE3MDM2NzA3NjQsImlzcyI6InNwLXRhc2tpZnkifQ.OsDU9VIW0vm88UIA7Indt_rrV3_0Y7Q2TGeOSduyD9Q',
    },
  });
  return response.data;
}
