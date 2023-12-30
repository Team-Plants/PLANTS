/* eslint-disable react-hooks/rules-of-hooks */
import { ReactElement, useState } from 'react';
import AddButton from '@/components/button/add/addButton';
import Card from '@/components/card/card';
import NumberChip from '@/components/chip/number/numberChip';
import S from '@/pages/boards/boards.module.css';
import Image from 'next/image';
import SettingImg from '@/assets/icons/Setting.svg';
import ColumnButton from '@/components/button/column/columnButton';
import AddTodoModal from '@/components/modal/addTodoModal/addTodoModal';
import Layout from '@/components/layout/layout';

function boards() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleClick() {
    setModalOpen((prev) => !prev);
  }

  return (
    <>
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
    </>
  );
}

export default boards;

boards.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
