import { Assign } from '@/types/User';

export interface CardList {
  cards: Card[];
  cursorId: null;
  totalCount: number;
}

export interface Card {
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
