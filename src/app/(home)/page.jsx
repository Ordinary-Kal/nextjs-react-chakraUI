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
