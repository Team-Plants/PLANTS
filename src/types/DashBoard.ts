export interface DashBoardList {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

export interface DashBoardData {
  cursorId: number;
  totalCount: number;
  dashboards: DashBoardList[];
}
