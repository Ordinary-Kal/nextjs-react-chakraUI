/* 프로젝트 시작시 삭제 예정
  1. MSW 예제 코드
  2. react-query 예제코드
  3. 기본 스타일링 적용된 컴포넌트 확인 코드 -> 스토리북으로 옮길 예정
*/
'use client';

import { Button, Text } from '@chakra-ui/react';
import { usePostsGetAll } from '@/axios/Posts/Posts.query';

const getDataPosts = async () => {
  const res = await fetch('/msw/api/posts');

  if (res.ok) {
    const data = await res.json();
    return data;
  }

  return [];
};

export default function Home() {
  // axios - react-query api 호출
  const { mutate } = usePostsGetAll({
    options: {
      onSuccess: (res) => {
        console.info(res);
      },
      onError: (err) => {
        console.error(err);
      },
    },
  });

  // msw /msw/api/posts
  const handleButtonMswClick = async () => {
    const result = await getDataPosts();

    console.info(result);
  };

  return (
    <>
      <Text textStyle='Subtitle_B'>데이터 정보</Text>
      <Button onClick={() => mutate()}>Axios-React-Query</Button>
      <Button onClick={handleButtonMswClick}>MSW</Button>
    </>
  );
}
