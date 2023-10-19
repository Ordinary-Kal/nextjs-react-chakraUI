import { defineStyle } from '@chakra-ui/styled-system';

import { runIfFn } from '@/utils/run-if-fn';

/**
 * Light & Dark mode
 * @example
 *  const bg = mode(`gray.100`, `whiteAlpha.200`)(props)
 * @see Example https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/components/button.ts
 */

const accessibleColorMap = {
  kakao: {
    bg: 'kakao.500',
    color: '#1A1A1A',
    hoverBg: 'kakao.600',
    activeBg: 'kakao.700',
  },
  google: {
    bg: 'google.500',
    color: '#808080',
    hoverBg: 'google.600',
    activeBg: 'google.700',
    border: 'gray.300',
  },
};

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    const bg = 'gray.100';

    return {
      bg,
      _hover: {
        bg: 'gray.100',
        _disabled: {
          bg,
        },
      },
      _active: { bg: 'gray.300' },
    };
  }

  const {
    bg = `${c}.500`,
    color = 'white',
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`,
    border = `${c}.500`,
  } = accessibleColorMap[c] ?? {};

  const background = bg;
  const borderColor = border;

  return {
    bg: background,
    color: color,
    borderWidth: 1,
    borderColor: borderColor,
    _hover: {
      bg: hoverBg,
      borderColor: hoverBg,
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: activeBg, borderColor: activeBg },
  };
});

const variantGhost = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    return {
      color: 'inherit',
      _hover: {
        bg: `gray.100`,
      },
      _active: `gray.200`,
    };
  }

  return {
    color: `${c}.600`,
    bg: 'transparent',
    _hover: {
      bg: `${c}.50`,
    },
    _active: {
      bg: `${c}.100`,
    },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = `gray.200`;
  return {
    border: '1px solid',
    borderColor: c === 'gray' ? borderColor : `${c}.500`,
    ...runIfFn(variantGhost, props),
  };
});

const variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: 'auto',
    lineHeight: 'normal',
    verticalAlign: 'baseline',
    color: `${c}.500`,
    _hover: {
      textDecoration: 'underline',
      _disabled: {
        textDecoration: 'none',
      },
    },
    _active: {
      color: `${c}.700`,
    },
  };
});

const variantPrimaryFilled = defineStyle({
  h: '52px',
  bg: `gray.600`,
  borderRadius: '8px',
  color: `white`,
  transition: 'background-color 0.2s ease-in-out',

  // textStyle : Text_B
  fontSize: { base: '16px', sm: '16px' },
  fontWeight: '700',
  lineHeight: '24px',

  _hover: {
    bg: `primary.500`,
    _disabled: {
      bg: `gray.300`,
    },
  },

  _active: {
    bg: `primary.600`,
  },

  _disabled: {
    bg: `gray.300`,
    opacity: 1,
  },
});

const variantPrimaryOutline = defineStyle({
  h: '52px',
  border: '1.5px solid',
  borderColor: 'primary.primary',
  borderRadius: '8px',
  bg: 'white',
  color: `gray.700`,
  transition: 'all 0.2s ease-in-out',

  // textStyle : Text_B
  fontSize: { base: '16px', sm: '16px' },
  fontWeight: '700',
  lineHeight: '24px',

  _hover: {
    color: `primary.primary`,
    bg: 'primary.50',
    _disabled: {
      bg: `gray.50`,
      borderColor: 'gray.200',
      color: 'gray.400',
    },
  },

  _active: {
    bg: 'primary.50',
  },

  _disabled: {
    bg: `gray.50`,
    borderColor: 'gray.200',
    color: 'gray.400',
  },
});

const variantFilter = defineStyle({
  px: '16px',
  py: '8px',
  bg: 'white',
  border: '1.5px solid',
  borderColor: 'transparent',
  borderRadius: '100px',

  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '28px',
  transition: 'all 0.2s ease-in-out',

  _active: {
    bg: 'primary.50',
    border: '1.5px solid',
    borderColor: 'primary.primary',
  },
});

const variantSort = defineStyle({
  w: '100px',
  h: '52px',
  m: '8px',
  color: 'tray.400',
  transition: 'all 0.2s ease-in-out',

  // textStyle : SubTitle_R
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '28px',

  _active: {
    fontWeight: '700',
    color: 'gray.700',
  },
});

const variantUnstyled = defineStyle({
  bg: 'none',
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  m: '0',
  p: '0',
  minW: '0',
  minH: '0',
  height: '100%',
});

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  primaryFilled: variantPrimaryFilled,
  primaryOutline: variantPrimaryOutline,
  filter: variantFilter,
  sort: variantSort,
  unstyled: variantUnstyled,
};

const baseStyle = defineStyle({
  w: '196px',
  h: 'fit-content',

  _focus: { boxShadow: 'none' },
});

export const Button = {
  baseStyle,
  variants,
  defaultProps: {
    variant: 'primaryFilled',
    size: 'lg',
    colorScheme: 'primary',
  },
};
