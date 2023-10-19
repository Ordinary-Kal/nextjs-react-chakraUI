import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'NotoSansKR',
      color: mode('#161616', '#FFFFFF')(props), // 기본 폰트 색상 gray.700
      bg: mode('#FFFFFF', '#363636')(props),
      letterSpacing: '-0.04em',
      fontSize: '16px', // text-style : Text_R
      fontWeight: 400,
      lineHeight: '24px',
      marginRight: '0px !important',
    },

    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },

    '#chakra-ui-light': {
      padding: '0px !important',
      margin: '0px !important',
    },

    input: {
      boxShadow: 'none !important',
    },

    li: { listStyle: 'none' },

    '#chakra-toast-manager-bottom': { marginBottom: '64px !important' },

    '.chakra-toast__inner': { margin: '24px 0px 0px !important' },
  }),
};

export default styles;
