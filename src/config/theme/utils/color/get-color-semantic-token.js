export const getColorToken = ({ key, dark, light }) => {
  const isObjAndStr = typeof light === 'object' && typeof dark === 'string';
  const isStrAndObj = typeof light === 'string' && typeof dark === 'object';
  const isObjAndObj = typeof light === 'object' && typeof dark === 'object';
  const isOutBoundDark =
    isObjAndObj && Object.keys(dark).some((key) => !light[key]);
  const isStringAndOptionalStr =
    typeof light === 'string' &&
    (typeof dark === 'undefined' || typeof dark === 'string');

  if (isObjAndStr || isStrAndObj)
    throw Error('should pass same type schema: obj,obj or str,str');
  if (isOutBoundDark)
    throw Error('The dark schema must be within the light schema');
  if (isStringAndOptionalStr) return createToken({ key, light, dark });

  const keyNumbers = Object.keys(light);

  const mainColor =
    '500' in light &&
    createToken({
      key,
      light: light[500] || 'black',
      dark: dark?.[500] || light[500] || 'black',
    });

  const hasOnlyMainColor = keyNumbers.length === 1 && mainColor;
  if (hasOnlyMainColor) return mainColor;

  const semanticTokens = keyNumbers.reduce((acc, cur) => {
    const token = createToken({
      key: `${key}.${cur}`,
      light: light[cur] || 'black',
      dark: dark?.[cur] || light[cur] || 'black',
    });
    return { ...acc, ...token };
  }, mainColor || {});

  return semanticTokens;
};

export const createToken = (params) => {
  return {
    [params.key]: {
      default: params.light,
      _dark: params.dark || params.light,
    },
  };
};
