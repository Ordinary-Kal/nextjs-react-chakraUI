import { defineStyle } from '@chakra-ui/styled-system';

const parts = ['control', 'icon', 'container', 'label'];

const variantCircle = defineStyle({
  label: {
    textStyle: 'Text_small',
  },
  icon: { mt: '4px', ml: '3px' },
  control: {
    w: '18px',
    h: '18px',
    borderRadius: '9px',
    border: '1.5px solid',
    borderColor: 'gray.300',
    _checked: {
      _disabled: { bg: 'gray.400' },
    },
  },
});

const variantSquare = defineStyle({
  label: {
    textStyle: 'Text_small',
  },
  icon: { mt: '4px', ml: '3px' },
  control: {
    w: '16px',
    h: '16px',
    borderRadius: '4px',
    border: '1.5px solid',
    borderColor: 'gray.300',

    _disabled: { bg: 'gray.200', borderColor: 'gray.200' },
  },
});

const variants = {
  square: variantSquare,
  circle: variantCircle,
};

export const Checkbox = {
  parts,
  baseStyle: {},
  defaultProps: {
    colorScheme: 'primaryColorScheme',
  },
  sizes: {},
  variants,
};
