export const variants = {
  outline: (props) => {
    const { colorScheme: c } = props;

    return {
      field: {
        h: '52px',
        border: '1.5px solid',
        borderColor: `${c}`,
        px: '16px',
        textStyle: 'Text_R',
        bg: 'white',
        transition: 'all 0.3s ease-in-out',
        _placeholder: { color: 'gray.400', textStyle: 'Text_R' },
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
          boxShadow: 'none',
          borderColor: 'inherit',
          zIndex: 0,
        },
      },
    };
  },

  unstyled: {
    field: {
      bg: 'transparent',
      px: 0,
      height: 'auto',
    },
    addon: {
      bg: 'transparent',
      px: 0,
      height: 'auto',
    },
  },
};
