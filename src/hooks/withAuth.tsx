/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import QUERY_KEYS from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function withAuth(WrappedComponent: any) {
  const WithAuth = (props: any) => {
    const router = useRouter();
    const { isLoading, error } = useQuery({
      queryKey: [QUERY_KEYS.getToken],
      queryFn: async () => {
        const data = await axios('/api/getToken');
        return data;
      },
    });

    useEffect(() => {
      if (!isLoading && error) {
        router.push('/login');
      }
    }, [isLoading, error, router]);

    return !isLoading && !error ? <WrappedComponent {...props} /> : null;
  };
  return WithAuth;
}

export function withLayout(
  PageComponent: any,
  getLayout: any,
  layoutProps: any,
) {
  const WithLayout = (props: any) => {
    const Layout = getLayout || ((page: any) => page);

    return (
      <Layout {...layoutProps}>
        <PageComponent {...props} />
      </Layout>
    );
  };

  const WithAuthLayout = withAuth(WithLayout);

  return WithAuthLayout;
}
