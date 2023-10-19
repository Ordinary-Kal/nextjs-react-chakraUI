import { defineStyle } from '@chakra-ui/styled-system';

const parts = ['container', 'control', 'label'];

const variantPrimary = defineStyle({
  control: {
    w: '18px',
    h: '18px',
    border: '1.5px solid',
    borderColor: 'gray.300',

    _invalid: {
      borderColor: 'gray.300',
    },

    _checked: {
      bg: 'white',
      borderColor: 'gray.300',
      color: 'primary.primary',

      _hover: {
        bg: 'white',
        borderColor: 'gray.300',
        color: 'primary.primary',
      },

      '&::before': {
        width: '8px',
        height: '8px',
      },
    },
  },
  label: {
    ml: '7px',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '-0.04em',
    color: 'gray.700',
  },
});

const variantControlHidden = defineStyle({
  control: {
    display: 'none',
  },
  label: {
    margin: '0',
  },
});

const variantDropdownMenu = defineStyle({
  control: {
    display: 'none',
  },

  label: {
    // textStyle : Text_R
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',

    transition: 'all 0.2s ease-in-out',
    _checked: {
      fontWeight: '700',
      color: 'primary.primary',

      _hover: {
        fontWeight: '700',
        color: 'primary.primary',
      },
    },
  },

  _checked: {
    fontWeight: '700',
    color: 'primary.primary',

    _hover: {
      fontWeight: '700',
      color: 'primary.primary',
    },
  },
});

const variants = {
  primary: variantPrimary,
  controlHidden: variantControlHidden,
  dropdownMenu: variantDropdownMenu,
};

export const Radio = {
  parts,
  baseStyle: {},
  defaultProps: {
    variant: 'primary',
  },
  sizes: {},
  variants,
};
