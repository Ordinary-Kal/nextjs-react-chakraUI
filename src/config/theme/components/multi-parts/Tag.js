import { defineStyle } from '@chakra-ui/styled-system';

const parts = ['container', 'label', 'closeButton'];

const variantFilled = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    container: { bg: `${c}`, borderRadius: '36px', px: '12px', py: '4px' },
    label: { textStyle: 'Text_S' },
  };
});

const variants = {
  filled: variantFilled,
};

export const Tag = {
  parts,
  baseStyle: {},
  sizes: {},
  variants,
  defaultProps: {
    variant: 'filled',
    colorScheme: 'gray.100',
  },
};
