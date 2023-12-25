import S from '@/components/button/dashBoard/delete/deleteDashBoard.module.css';

interface Category {
  device: DeviceType;
}

function DeleteDashBoardButton({ device }: Category) {
  return <button className={S[device]}>대시보드 삭제하기</button>;
}

export default DeleteDashBoardButton;
