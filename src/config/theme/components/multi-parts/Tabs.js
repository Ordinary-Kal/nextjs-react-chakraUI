import { defineStyle } from '@chakra-ui/styled-system';

const parts = ['root', 'tab', 'tablist', 'tabpanel', 'tabpanels', 'indicator'];

const variantRoundSquare = defineStyle({
  tab: {
    w: '80px',
    h: '44px',
    mr: '8px',
    p: '0px',
    borderRadius: '8px',
    color: 'gray.400',

    // textStyle : Text_R
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',

    _selected: {
      bg: 'primary.primary',
      color: 'white',
    },
  },

  tabpanel: {
    mt: '40px',
    p: '0',
  },
});

const variantUnderBar = defineStyle({
  tab: {
    h: '56px',
    w: '170px',
    borderBottom: '4px solid',
    borderColor: 'gray.200',
    color: 'gray.400',

    // textStyle : head3_R
    fontSize: '22px',
    fontWeight: 400,
    lineHeight: '36px',
    _selected: {
      borderColor: 'primary.primary',
      fontWeight: 700,
      color: '#1E1A1A',
    },
  },
  tabpanel: {
    p: '0',
  },
});

const variantSquare = defineStyle({
  tab: {
    w: '20%',
    h: '60px',
    mb: '60px',
    bg: 'white',
    border: '1px solid',
    borderColor: 'gray.100',

    // textStyle : Subtitle_R
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '28px',

    _disabled: {
      fontWeight: '400',
      color: 'gray.400',
    },

    _selected: {
      bg: 'primary.primary',
      color: 'white',
    },
  },
  tabpanel: {
    p: '0',
  },
});

const variants = {
  roundSquare: variantRoundSquare,
  underBar: variantUnderBar,
  square: variantSquare,
};

export const Tabs = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants,
};
