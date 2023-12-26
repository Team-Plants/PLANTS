import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/pages/boards/boards.module.css';

function boards() {
  return (
    <div className={S.container}>
      <div className={S.sideMenu}>
        <SideMenu pageId={0} />
      </div>
      <div className={S.columnContainer}>
        <div className={S.header}>헤더</div>
        <div className={S.rowContainer}>
          <div className={S.toDo}>To Do</div>
          <div className={S.onProgress}>On Progress</div>
          <div className={S.done}>Done</div>
          <div className={S.addColumn}>새로운 칼럼 추가</div>
        </div>
      </div>
    </div>
  );
}

export default boards;
