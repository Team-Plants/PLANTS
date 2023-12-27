import AddButton from '@/components/button/add/addButton';
import Card from '@/components/card/card';
import CircleChip from '@/components/chip/circle/circleChip';
import NumberChip from '@/components/chip/number/numberChip';
import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/pages/boards/boards.module.css';
import Image from 'next/image';
import SettingImg from '@/assets/icons/Setting.svg';

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
                {/* <CircleChip color="purple" isChecked={false} /> */}
                <span className={S.sectionName}>TO DO</span>
                <NumberChip num={2} />
              </div>
              <Image src={SettingImg} alt="설정 버튼" width={22} height={22} />
            </div>
            <AddButton device="mobile" />
            <Card title="송민혁 천재" date="12월 27일" />
          </div>
          <div className={S.onProgress}>On Progress</div>
          <div className={S.done}>Done</div>
          <div className={S.addColumn}>새로운 칼럼 추가</div>
        </div>
      </div>
    </div>
  );
}

export default boards;
