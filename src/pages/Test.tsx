import SideMenu from '@/components/sideMenu/SideMenu';

const data = {
  cursorId: 0,
  totalCount: 0,
  dashboards: [
    {
      id: 1,
      title: '테스트1',
      color: '#FF0000',
      createdAt: '2023-12-21T10:13:21.053Z',
      updatedAt: '2023-12-21T10:13:21.053Z',
      createdByMe: true,
      userId: 66,
    },
    {
      id: 2,
      title: '테스트2',
      color: '#FFA500',
      createdAt: '2023-12-21T10:13:21.053Z',
      updatedAt: '2023-12-21T10:13:21.053Z',
      createdByMe: true,
      userId: 66,
    },
    {
      id: 3,
      title: '테스트3',
      color: '#FFFF00',
      createdAt: '2023-12-21T10:13:21.053Z',
      updatedAt: '2023-12-21T10:13:21.053Z',
      createdByMe: true,
      userId: 65,
    },
    {
      id: 4,
      title: '테스트4',
      color: '#008000',
      createdAt: '2023-12-21T10:13:21.053Z',
      updatedAt: '2023-12-21T10:13:21.053Z',
      createdByMe: false,
      userId: 65,
    },
    {
      id: 5,
      title: '테스트5',
      color: '#0000FF',
      createdAt: '2023-12-21T10:13:21.053Z',
      updatedAt: '2023-12-21T10:13:21.053Z',
      createdByMe: true,
      userId: 65,
    },
  ],
};
const pageId = 1;
function Test() {
  return <SideMenu data={data} pageId={pageId} />;
}

export default Test;
