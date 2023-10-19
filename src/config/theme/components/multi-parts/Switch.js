import { defineStyle } from '@chakra-ui/styled-system';

const parts = ['container', 'track', 'thumb'];

const variantPrimary = defineStyle({
  track: {
    alignItems: 'center',
    bg: 'gray.200',

    _checked: {
      bg: 'primary.primary',
      boxShadow: '-2px 2px 3px 0px #971237 inset',
    },
  },
  thumb: {
    position: 'relative',
    top: '-0.2px',
    right: ' -1.5px',
    w: '13.33px',
    h: '13.33px',
    bg: 'white',
    boxShadow: '-1px 1px 2px 0px #00000040',
  },
});

const variants = {
  primary: variantPrimary,
};

export const Switch = {
  parts,
  baseStyle: {},
  defaultProps: { variant: 'primary' },
  sizes: {},
  variants,
};
