/* eslint-disable react-hooks/rules-of-hooks */
import { getCards } from '@/api/card';
import SettingImg from '@/assets/icons/Setting.svg';
import AddButton from '@/components/button/add/addButton';
import ColumnButton from '@/components/button/column/columnButton';
import Card from '@/components/card/card';
import NumberChip from '@/components/chip/number/numberChip';
import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import TodoModal from '@/components/modal/todoModal/todoModal';
import SideMenu from '@/components/sideMenu/SideMenu';
import QUERY_KEYS from '@/constants/queryKeys';
import S from '@/pages/boards/boards.module.css';
import { CardList } from '@/types/Card';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function boards() {
  const [mounted, setMounted] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data } = useQuery<CardList>({
    queryKey: [QUERY_KEYS.card],
    queryFn: async () => await getCards(1012),
  });

  return (
    mounted && (
      <div className={S.container}>
        <SideMenu pageId={0} />
        <div className={S.main}>
          <DashboardHeader
            folder="플랜츠 최고"
            users={[
              {
                letter: '한',
                color: 'yellow',
              },
              {
                letter: '안',
                color: 'yellow',
              },
              {
                letter: '전',
                color: 'yellow',
              },
            ]}
            user={{
              letter: 'B',
              name: '민혁',
              color: 'blue',
              ownerFolder: {
                folder: '플랜츠 최고',
              },
            }}
          />
          <div className={S.mainContainer}>
            <div className={S.toDo}>
              <div className={S.infoContainer}>
                <div className={S.info}>
                  <div className={S.chip} />
                  <span className={S.sectionName}>TO DO</span>
                  <NumberChip num={2} />
                </div>
                <Image
                  src={SettingImg}
                  alt="설정 버튼"
                  width={22}
                  height={22}
                />
              </div>
              <AddButton />
              {data?.cards.map((item, index) => (
                <>
                  {openModal && (
                    <TodoModal state={openModal} cardData={item} key={index} />
                  )}
                  <Card
                    key={item.id}
                    title={item.title}
                    date={item.dueDate}
                    onClick={() => setOpenModal(!openModal)}
                  />
                </>
              ))}
            </div>
            <div className={S.onProgress}>
              <div className={S.infoContainer}>
                <div className={S.info}>
                  <div className={S.chip} />
                  <span className={S.sectionName}>On Progress</span>
                  <NumberChip num={3} />
                </div>
                <Image
                  src={SettingImg}
                  alt="설정 버튼"
                  width={22}
                  height={22}
                />
              </div>
              <AddButton />
            </div>
            <div className={S.done}>
              <div className={S.infoContainer}>
                <div className={S.info}>
                  <div className={S.chip} />
                  <span className={S.sectionName}>Done</span>
                  <NumberChip num={3} />
                </div>
                <Image
                  src={SettingImg}
                  alt="설정 버튼"
                  width={22}
                  height={22}
                />
              </div>
              <AddButton />
            </div>
            <div className={S.addButton}>
              <ColumnButton />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default boards;
