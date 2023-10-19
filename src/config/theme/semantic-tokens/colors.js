import { getColorSchema } from '@/config/theme/utils/color/get-color-schema';
import { getColorToken } from '@/config/theme/utils/color/get-color-semantic-token';

const colors = {
  primary: {
    default: {
      primary: '#C41848',
      50: '#FFF8FA',
      100: '#FBE0E7',
      200: '#F6B2C5',
      300: '#F085A3',
      400: '#EA5781',
      500: '#E52A5E',
      600: '#971237',
      700: '#690D27',
    },
  },
  gray: {
    default: {
      50: '#FAFAFA',
      100: '#F4F4F4',
      200: '#EEEEEE',
      300: '#BDBDBD',
      400: '#9E9E9E',
      500: '#616161',
      600: '#262626',
      700: '#161616',
    },
  },
  white: {
    default: '#FFFFFF',
  },
  black: {
    default: '#000000',
  },
  info: {
    default: '#205EFF',
  },
  success: {
    default: '#3BD669',
  },
  warning: {
    default: '#FA9601',
  },
  danger: {
    default: {
      500: '#FF1600',
      lighten: '#FF5040',
      darken: '#A61203',
      disabled: '#F9EAE9',
    },
  },
  dim: {
    default: 'rgb(38 38 38 / 70%)', // 디자인시스템 #262626 70%
  },
  primaryColorScheme: {
    default_gen: '#C41848', // colorScheme 속성에서 값을 불러오기 위해 default_gen으로 생성
  },
  kakao: {
    default_gen: '#FEE500',
  },

  google: {
    default: {
      500: '#FFFFFF',
      600: '#F5F5F5',
      700: '#EEEEEE',
    },
  },
};

const convertToColorToken = (colors) =>
  Object.keys(colors).reduce((prev, key) => {
    const color = colors[key];
    const getLight = () => {
      if (color.default) return color.default;
      if (color.default_gen) return getColorSchema(color.default_gen);
      throw Error(`should set default color on: ${key}`);
    };
    const getDark = () => {
      if (color.dark) return color.dark;
      if (color.dark_gen) return getColorSchema(color.dark_gen);
    };
    const token = getColorToken({
      key,
      light: getLight(),
      dark: getDark(),
    });
    return { ...prev, ...token };
  }, {});

export default convertToColorToken(colors);
