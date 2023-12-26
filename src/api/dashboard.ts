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
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQzLCJ0ZWFtSWQiOiIxLTUiLCJpYXQiOjE3MDM2MDk5NzAsImlzcyI6InNwLXRhc2tpZnkifQ.vkUa5DYy-heqbWPJC1M2ifFgpgC_D3zHuq3fLyy0Edc',
    },
  });

  return response?.data;
}
