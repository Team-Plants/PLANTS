import { instance } from '@/libs/api';

type Method = 'pagination' | 'infiniteScroll';

export async function getDashboards(method: Method) {
  const response = await instance.get('/dashboards', {
    params: {
      navigationMethod: `${method}`,
      size: 5,
    },
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQzLCJ0ZWFtSWQiOiIxLTUiLCJpYXQiOjE3MDM2NzA3NjQsImlzcyI6InNwLXRhc2tpZnkifQ.OsDU9VIW0vm88UIA7Indt_rrV3_0Y7Q2TGeOSduyD9Q',
    },
  });

  return response?.data;
}
