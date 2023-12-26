import S from '@/components/table/editDashboard/editDashboard.module.css';

function EditDashboard() {
  return (
    <div className={S.container}>
      <div className={S.header}>
        {'대시보드 타이틀'}
        <div>{'색 선택란'}</div>
      </div>
      <p className={S.p}>대시보드 이름</p>
    </div>
  );
}

export default EditDashboard;
