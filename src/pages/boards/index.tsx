import AddButton from '@/components/button/add/addButton';
import Card from '@/components/card/card';
import NumberChip from '@/components/chip/number/numberChip';
import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/pages/boards/boards.module.css';
import Image from 'next/image';
import SettingImg from '@/assets/icons/Setting.svg';
import ColumnButton from '@/components/button/column/columnButton';
import TodoImg from '@/assets/images/Todo1.png';

function boards() {
  return (
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
              <Image src={SettingImg} alt="설정 버튼" width={22} height={22} />
            </div>
            <AddButton />
            <Card title="송민혁 천재" date="12월 27일" />
            <Card title="송민혁 천재" date="12월 27일" cardImg={TodoImg} />
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
            <AddButton />
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
            <AddButton />
            <Card title="송민혁 바보" date="12월 27일" />
          </div>
          <div className={S.addButton}>
            <ColumnButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default boards;
