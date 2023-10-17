import { rest } from 'msw';

export const handlers = [
  rest.get(`/msw/api/posts`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        data: [
          {
            userId: 1,
            id: 1,
            title: 'hello world',
            body: 'it is body',
          },
          {
            userId: 2,
            id: 2,
            title: 'hello world',
            body: 'it is body',
          },
          {
            userId: 3,
            id: 3,
            title: 'hello world',
            body: 'it is body',
          },
        ],
      }),
    );
  }),
];
