import { useMutation } from '@tanstack/react-query';
import postsApi from './Posts.api';

const QUERY_KEY_POSTS_API = {
  POSTS_GET_ALL: () =>
    ['POSTS_GET_ALL'].filter((key) => typeof key !== undefined),
};

export const usePostsGetAll = (params) => {
  const mutationKey = QUERY_KEY_POSTS_API.POSTS_GET_ALL();
  const result = useMutation(
    mutationKey,
    postsApi.postsGetAll,
    params?.options,
  );

  return { ...result, mutationKey };
};
