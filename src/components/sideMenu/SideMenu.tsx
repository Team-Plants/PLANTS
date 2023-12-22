import S from '@/components/sideMenu/sideMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SmallLogoImg from '@/assets/icons/SmallLogo.svg';
import TaskifyImg from '@/assets/icons/Taskify.svg';
import AddBoxImg from '@/assets/icons/AddBox.svg';
import CrownImg from '@/assets/icons/Crown.svg';
import { MouseEvent, useEffect, useState } from 'react';
import { DashBoardData } from '@/types/DashBoard';
import axios, { AxiosResponse } from 'axios';

interface SideMenuProps {
  pageId: number;
  data: DashBoardData;
}

function SideMenu({ pageId, data }: SideMenuProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [dashboards, setDashboards] = useState([]);
  async function fetchMoreDashboards() {
    setIsLoading(true);
    const response: AxiosResponse = await axios.get(
      'https://sp-taskify-api.vercel.app/5/dashboards',
      {
        params: {
          navigationMethod: 'infiniteScroll',
          size: 10,
        },
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInRlYW1JZCI6IjUiLCJpYXQiOjE3MDMxNTM0MjEsImlzcyI6InNwLXRhc2tpZnkifQ.EymSG57SnaoeMZQ79mPVpzMbk8FB7Vyr_Hb0P_yFZvY',
        },
      },
    );
    const data = await response.data;
    setDashboards((prev) => prev.concat(data));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMoreDashboards();
  }, []);
  console.log(dashboards);

  function handleAddClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // 버튼을 누르면 대시보드 생성하기 모달이 트리거 되어야함
  }

  return (
    <div className={S.main}>
      <div className={S.headerOuter}>
        <div className={S.imgContainer}>
          <Link href="/myboard">
            <Image
              src={SmallLogoImg}
              alt="로고 이미지"
              className={S.smallLogoImg}
            />
          </Link>
          <Link href="/myboard">
            <Image
              src={TaskifyImg}
              alt="Taskify 이미지"
              className={S.taskifyImg}
            />
          </Link>
        </div>
        <div className={S.headerContainer}>
          <p className={S.headerDescription}>Dash Boards</p>
          <button onClick={handleAddClick}>
            <Image
              src={AddBoxImg}
              alt="대시보드 추가 이미지"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <div className={S.dashBoardOuter}>
        <ul className={S.dashBoardContainer}>
          {data &&
            data.dashboards.map((dashboard) => (
              <Link href={`/myboard/${dashboard.id}`} key={dashboard.id}>
                <li
                  className={S.dashBoardLi}
                  style={{
                    backgroundColor:
                      pageId == dashboard.id ? '#F1EFFD' : '#FFF',
                  }}>
                  <div
                    className={S.dashBoardColor}
                    style={{ backgroundColor: `${dashboard.color}` }}></div>
                  <div className={S.dashBoardTitle}>
                    {dashboard.title + ' '}
                    {dashboard.createdByMe && (
                      <Image
                        src={CrownImg}
                        alt="왕관 이미지"
                        width={17.6}
                        height={14}
                      />
                    )}
                  </div>
                </li>
              </Link>
            ))}
          {isLoading && <div>Loading...</div>}
          {!isLoading && <div></div>}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
