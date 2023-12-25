import MemberList from '@/components/table/member/memberList';
import React from 'react';

const members = [
  {
    id: 1,
    userId: 1,
    email: '송민혁',
    nickname: '미녁',
    profileImageUrl: 'string',
    createdAt: '2023-12-23T07:26:40.737Z',
    updatedAt: '2023-12-23T07:26:40.737Z',
    isOwner: true,
  },
  {
    id: 2,
    userId: 2,
    email: '김윤후',
    nickname: '곰돌이 후',
    profileImageUrl: 'string',
    createdAt: '2023-12-23T07:26:40.737Z',
    updatedAt: '2023-12-23T07:26:40.737Z',
    isOwner: false,
  },
  {
    id: 2,
    userId: 3,
    email: '김윤후',
    nickname: '곰돌이 후',
    profileImageUrl: 'string',
    createdAt: '2023-12-23T07:26:40.737Z',
    updatedAt: '2023-12-23T07:26:40.737Z',
    isOwner: false,
  },
  {
    id: 2,
    userId: 4,
    email: '김윤후',
    nickname: '곰돌이 후',
    profileImageUrl: 'string',
    createdAt: '2023-12-23T07:26:40.737Z',
    updatedAt: '2023-12-23T07:26:40.737Z',
    isOwner: false,
  },
  {
    id: 2,
    userId: 5,
    email: '김윤후',
    nickname: '곰돌이 후',
    profileImageUrl: 'string',
    createdAt: '2023-12-23T07:26:40.737Z',
    updatedAt: '2023-12-23T07:26:40.737Z',
    isOwner: false,
  },
];

function test() {
  return <MemberList members={members} />;
}

export default test;
