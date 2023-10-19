import localFont from 'next/font/local';

export const NotoSansKR = localFont({
  src: [
    {
      path: '../../../../../../../public/fonts/notoSansKR/NotoSansKR-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../../../../public/fonts/notoSansKR/NotoSansKR-Regular.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});
