/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import AddButton from '@/components/button/add/addButton';
import Card from '@/components/card/card';
import NumberChip from '@/components/chip/number/numberChip';
import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/pages/boards/boards.module.css';
import Image from 'next/image';
import SettingImg from '@/assets/icons/Setting.svg';
import ColumnButton from '@/components/button/column/columnButton';
import AddTodoModal from '@/components/modal/addTodoModal/addTodoModal';
import InputModal from '@/components/modal/inputModal/inputModal';
import InputLayout from '@/components/modal/input/inputLayout';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import ModalButtonSet from '@/components/modal/button/modalButtonSet';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import { FieldValues, useForm } from 'react-hook-form';

function boards() {
  const [mounted, setMounted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpenColumnModal, setIsOpenColumnModal] = useState(false);

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      newProjectName: '',
    },
  });

  const { handleSubmit, control } = methods;

  function handleClick() {
    setModalOpen((prev) => !prev);
  }

  function handleAddColumnModal() {
    setIsOpenColumnModal((prev) => !prev);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

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
              <AddButton onClick={handleClick} />
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
              <ColumnButton onClick={handleAddColumnModal} />
            </div>
          </div>
        </div>
        {modalOpen && <AddTodoModal onClick={handleClick} />}
        {isOpenColumnModal && (
          <InputModal onClick={() => {}} title={'새 컬럼 생성'}>
            <InputLayout label="이름" isNecessary={false}>
              <form
                // onSubmit 동작 구현
                onSubmit={handleSubmit(() => {})}
                className={CommonStyle.form}>
                <DefaultInput
                  placeholder="새 프로젝트 이름"
                  control={control}
                  name="newProjectName"
                />
                <ModalButtonSet
                  isDelete={false}
                  submitButtonTitle="생성"
                  onClickCancel={handleAddColumnModal}
                />
              </form>
            </InputLayout>
          </InputModal>
        )}
      </div>
    )
  );
}

export default boards;
