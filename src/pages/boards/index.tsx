/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import AddButton from '@/components/button/add/addButton';
import AddTodoModal from '@/components/modal/addTodoModal/addTodoModal';
import Card from '@/components/card/card';
import ColumnButton from '@/components/button/column/columnButton';
import Layout from '@/components/layout/layout';
import NumberChip from '@/components/chip/number/numberChip';
import SettingImg from '@/assets/icons/Setting.svg';
import QUERY_KEYS from '@/constants/queryKeys';
import { getDashboard } from '@/api/dashboard';
import S from '@/pages/boards/boards.module.css';

//페이지 라우팅 변경한다치고 구현함
export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const dashboardId = context?.params['id'];

  return {
    props: {
      dashboardId,
    },
  };
}

function boards({ dashboardId }: { dashboardId: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [folderName, setFolderName] = useState();
  const [folderOwner, setFolderOwner] = useState();
  const { data: myDashboard } = useQuery({
    queryKey: [QUERY_KEYS.myDashboard, dashboardId],
    queryFn: () => getDashboard(dashboardId),
    enabled: true,
  });

  function handleClick() {
    setModalOpen((prev) => !prev);
  }

  useEffect(() => {
    setFolderName(myDashboard.title);
    setFolderOwner(myDashboard.createdByMe);
  }, [myDashboard]);

  return (
    <Layout folder={folderName} Owner={folderOwner}>
      <div className={S.mainContainer}>
        <div className={S.toDo}>
          <div className={S.infoContainer}>
            <div className={S.info}>
              <div className={S.chip} />
              <span className={S.sectionName}>TO DO</span>
              <NumberChip num={2} />
            </div>
            <Image src={SettingImg} alt="설정 버튼" width={22} height={22} />
          </div>
          <AddButton onClick={handleClick} />
          <Card title="송민혁 천재" date="12월 27일" />
          <Card title="송민혁 천재" date="12월 27일" />
        </div>
        <div className={S.onProgress}>
          <div className={S.infoContainer}>
            <div className={S.info}>
              <div className={S.chip} />
              <span className={S.sectionName}>On Progress</span>
              <NumberChip num={3} />
            </div>
            <Image src={SettingImg} alt="설정 버튼" width={22} height={22} />
          </div>
          <AddButton onClick={handleClick} />
          <Card title="송민혁 대박" date="12월 27일" />
        </div>
        <div className={S.done}>
          <div className={S.infoContainer}>
            <div className={S.info}>
              <div className={S.chip} />
              <span className={S.sectionName}>Done</span>
              <NumberChip num={3} />
            </div>
            <Image src={SettingImg} alt="설정 버튼" width={22} height={22} />
          </div>
          <AddButton onClick={handleClick} />
          <Card title="송민혁 바보" date="12월 27일" />
        </div>
        <div className={S.addButton}>
          <ColumnButton />
        </div>
      </div>
      {modalOpen && <AddTodoModal onClick={handleClick} />}
    </Layout>
  );
}

export default boards;
