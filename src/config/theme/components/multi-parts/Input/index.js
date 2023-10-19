import { sizes } from './sizes';
import { variants } from './variants';

const parts = ['addon', 'field', 'element'];

export const Input = {
  parts,
  sizes,
  variants,
  baseStyle: {
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
    colorScheme: 'gray.200',
  },
};
