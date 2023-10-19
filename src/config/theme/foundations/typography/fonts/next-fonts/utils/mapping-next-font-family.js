export const mappingNextFontFamily = (fonts) => {
  return Object.entries(fonts).reduce((prev, curr) => {
    const [key, value] = curr;
    return {
      ...prev,
      [key]: value.style.fontFamily,
    };
  }, {});
};
