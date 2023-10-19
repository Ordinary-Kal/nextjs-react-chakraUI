import { defineStyle } from '@chakra-ui/styled-system';

const parts = [
  'content',
  'header',
  'body',
  'footer',
  'popper',
  'arrow',
  'closeButton',
];

const variantNotice = defineStyle({
  content: {
    border: 'none',
    bg: 'none',
    w: '588px',
  },

  header: {
    h: '80px',
    px: '24px',
    py: '0',
    bg: 'primary.primary',
    border: 'none',
    borderTopRadius: '8px',
    color: 'white',
    textStyle: 'head3_B',
    lineHeight: '80px',
  },

  body: {
    bg: 'gray.100',
    px: '24px',
    py: '0px',
    color: 'gray.700',
    minH: '396px',
    maxH: '656px',
  },

  arrow: {
    position: 'relative',
    left: '-3px !important',
    w: '16px !important',
    h: '12px !important',
    bg: 'primary.primary !important',
    shadow: 'none !important',
  },
});

const variants = {
  notice: variantNotice,
};

export const Popover = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants,
};
