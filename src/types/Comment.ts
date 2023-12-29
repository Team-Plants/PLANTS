import { Assign } from '@/types/User';

export interface CommentData {
  comments: string[];
  cursorId?: number;
}

export interface CommentDetail {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: Assign;
}
