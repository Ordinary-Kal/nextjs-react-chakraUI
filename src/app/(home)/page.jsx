'use client';

import { Button } from '@chakra-ui/react';
import { usePostsGetAll } from '@/axios/Posts/Posts.query';

export default function Home() {
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
  return (
    <>
      <Button onClick={() => mutate()}>Helloworld</Button>
    </>
  );
}
