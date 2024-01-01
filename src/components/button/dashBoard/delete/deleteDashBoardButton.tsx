import { deleteDashboard } from '@/api/dashboard';
import S from '@/components/button/dashBoard/delete/deleteDashBoard.module.css';
import { useRouter } from 'next/router';

interface DeleteDashboardProps {
  dashboardId: string;
}

function DeleteDashBoardButton({ dashboardId }: DeleteDashboardProps) {
  const router = useRouter();

  async function handleDeleteClick() {
    const result = await deleteDashboard(dashboardId);
    if (result) {
      router.push('/mydashboard');
    }
  }

  return (
    <button className={S.container} onClick={handleDeleteClick}>
      대시보드 삭제하기
    </button>
  );
}

export default DeleteDashBoardButton;
