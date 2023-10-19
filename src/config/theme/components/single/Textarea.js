import { defineStyle } from '@chakra-ui/react';

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    border: '1.5px solid',
    borderColor: `${c}`,
    pt: '24px',
    pb: '40px',
    px: '16px',
    textStyle: 'Text_R',
    resize: 'none',
    bg: 'white',
    transition: 'all 0.3s ease-in-out',
    _placeholder: { color: 'gray.400' },
    _disabled: {
      bg: 'gray.200',
    },
    _invalid: {
      borderColor: 'danger',
    },
    _focus: {
      _invalid: {
        borderColor: 'black',
      },
      borderColor: 'black',
    },
    _focusVisible: {
      zIndex: '0',
      boxShadow: 'none',
      borderColor: 'inherit',
    },
  };
});

const unstyled = defineStyle({
  _disabled: {
    opacity: 1,
    cursor: 'not-allowed',
  },
});
const variants = {
  outline: variantOutline,
  unstyled: unstyled,
};

export const Textarea = {
  baseStyle: {},
  defaultProps: {
    colorScheme: 'gray.200',
    variant: 'outline',
  },
  sizes: {},
  variants,
};
