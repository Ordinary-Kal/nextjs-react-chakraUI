import HTTP from '../config/HTTP';

const postsApi = {
  postsGetAll: async () => {
    const { data: posts } = await HTTP.get({
      url: '/posts',
    });

    return posts;
  },
  postsGetOnePost: async () => {},
  postsCreatePost: async () => {},
  postsUpdatePost: async () => {},
  postsPatchPost: async () => {},
  postsDeletePost: async () => {},
};

export default postsApi;
