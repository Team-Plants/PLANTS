export interface MemberProps {
  id: number;
  userId?: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner?: boolean;
}
