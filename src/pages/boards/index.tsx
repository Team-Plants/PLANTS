import { useState, useEffect } from 'react';
import Image from 'next/image';
import AddButton from '@/components/button/add/addButton';
import AddTodoModal from '@/components/modal/addTodoModal/addTodoModal';
import Card from '@/components/card/card';
import ColumnButton from '@/components/button/column/columnButton';
import Layout from '@/components/layout/layout';
import NumberChip from '@/components/chip/number/numberChip';
/* eslint-disable react-hooks/rules-of-hooks */
import { getCards } from '@/api/card';
import SettingImg from '@/assets/icons/Setting.svg';
import EditTodoModal from '@/components/modal/editTodoModal/editTodoModal';
import TodoModal from '@/components/modal/todoModal/todoModal';
import QUERY_KEYS from '@/constants/queryKeys';
import S from '@/pages/boards/boards.module.css';
import { CardList } from '@/types/Card';
import { useQuery } from '@tanstack/react-query';

function Boards(cardId: number) {
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
    <>
      <div className={S.mainContainer}>
        <div className={S.toDo}>
          <div className={S.infoContainer}>
            <div className={S.info}>
              <div className={S.chip} />
              <span className={S.sectionName}>TO DO</span>
              <NumberChip num={data?.totalCount} />
            </div>
            <Image src={SettingImg} alt="설정 버튼" width={22} height={22} />
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
        </div>
        <div className={S.addButton}>
          <ColumnButton />
        </div>

        {modalOpen && <AddTodoModal onClick={handleClick} />}
      </div>
    </>
  );
}

export default withLayout(Boards, Layout);
