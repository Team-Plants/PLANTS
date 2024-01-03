import { Assign } from '@/types/Assign';

export interface CardList {
  cards: CardData[];
  cursorId: null;
  totalCount: number;
}

export interface CardData {
  id: number;
  assignee: Assign;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}
