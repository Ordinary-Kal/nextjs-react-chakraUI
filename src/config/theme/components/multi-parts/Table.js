import { defineStyle } from '@chakra-ui/styled-system';

const parts = ['table', 'thead', 'tbody', 'tr', 'th', 'td', 'tfoot', 'caption'];

const variantBasic = defineStyle({
  td: {
    px: '0px',
    py: '16px',

    // textStyle : Text_R
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',

    '&:nth-of-type(2)': {
      fontWeight: '700',
    },
  },
  tr: {
    borderBottom: '1px solid',
    borderColor: 'gray.200',
  },
  table: {
    borderTop: '2px solid',
    borderColor: 'gray.700',
  },
});

const variantGrayBasic = defineStyle({
  td: {
    px: '0px',
    py: '16px',

    // textStyle : Text_R
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    color: 'gray.400',

    '&:nth-of-type(2)': {
      color: 'gray.700',
    },
  },
  tr: {
    borderBottom: '1px solid',
    borderColor: 'gray.200',
  },
  table: {
    borderTop: '2px solid',
    borderColor: 'gray.700',
  },
});

const variantAttachment = defineStyle({
  table: {
    border: '1px solid',
    borderColor: 'gray.200',
  },
  thead: {
    bg: 'white',
    borderBottom: '1px solid',
    borderColor: 'gray.200',
    zIndex: '5',
  },

  th: {
    px: '10px',
    py: '16px',
    bg: 'white',

    // textStyle : Text_B
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',

    '&:nth-of-type(1)': {
      px: '16px',
      py: '16px',
    },
  },
  td: {
    px: '10px',
    py: '16px',

    // textStyle : Text_R
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',

    '&:nth-of-type(1)': {
      px: '16px',
      py: '16px',
    },

    '&:nth-of-type(3)': {
      color: 'gray.400',
    },
  },
  tr: {
    borderBottom: '1px solid',
    borderColor: 'gray.200',
  },
});

const variantEstimate = defineStyle({
  thead: {
    h: '60px',
    px: '8px',
    border: 'none',
    bg: 'gray.200',
  },

  th: {
    height: '60px',
    px: '8px',
    py: '0px',

    // textStyle : Text_R
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
  },
});

const variants = {
  basic: variantBasic,
  grayBasic: variantGrayBasic,
  attachment: variantAttachment,
  estimate: variantEstimate,
};

export const Table = {
  parts,
  baseStyle: {},
  variants,
  defaultProps: {
    variant: 'basic',
  },
  sizes: {},
};
