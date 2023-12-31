/* eslint-disable react-hooks/rules-of-hooks */
import { getCards } from '@/api/card';
import SettingImg from '@/assets/icons/Setting.svg';
import AddButton from '@/components/button/add/addButton';
import ColumnButton from '@/components/button/column/columnButton';
import Card from '@/components/card/card';
import NumberChip from '@/components/chip/number/numberChip';
import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import EditTodoModal from '@/components/modal/editTodoModal/editTodoModal';
import TodoModal from '@/components/modal/todoModal/todoModal';
import SideMenu from '@/components/sideMenu/SideMenu';
import QUERY_KEYS from '@/constants/queryKeys';
import S from '@/pages/boards/boards.module.css';
import { CardList } from '@/types/Card';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SettingImg from '@/assets/icons/Setting.svg';
import ColumnButton from '@/components/button/column/columnButton';
import AddTodoModal from '@/components/modal/addTodoModal/addTodoModal';

function boards(cardId: number) {
  const [mounted, setMounted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function handleClick() {
    setModalOpen((prev) => !prev);
  }

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
                  <NumberChip num={data?.totalCount} />
                </div>
                <Image
                  src={SettingImg}
                  alt="설정 버튼"
                  width={22}
                  height={22}
                />
              </div>

              {data?.cards.map((item, index) => (
                <>
                  {openModifyModal ? (
                    <EditTodoModal
                      state={openModifyModal}
                      onClick={() => setOpenModifyModal(!openModifyModal)}
                      cardId={172}
                      data={item}
                    />
                  ) : (
                    openModal && (
                      <TodoModal
                        state={openModal}
                        cardData={item}
                        key={index}
                        modal={() => setOpenModifyModal(!openModifyModal)}
                      />
                    )
                  )}
                  <Card
                    key={item.id}
                    title={item.title}
                    date={item.dueDate}
                    onClick={() => setOpenModal(!openModal)}
                  />
                </>
              ))}

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
                <Image
                  src={SettingImg}
                  alt="설정 버튼"
                  width={22}
                  height={22}
                />
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
                <Image
                  src={SettingImg}
                  alt="설정 버튼"
                  width={22}
                  height={22}
                />
              </div>
              <AddButton onClick={handleClick} />
              <Card title="송민혁 바보" date="12월 27일" />
            </div>
            <div className={S.addButton}>
              <ColumnButton />
            </div>
          </div>
        </div>
        {modalOpen && <AddTodoModal onClick={handleClick} />}
      </div>
    )
  );
}

export default boards;
