import { getColorToneSafety } from './utils/get-color-tone-safety';
import { getSafetyLength } from './utils/get-safety-length';

export function getColorSchema(color, options) {
  const {
    percent = 5,
    keys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  } = options || {};

  const { darkTones, lightTones } = getColorToneSafety({
    color,
    percent,
    safetyLength: getSafetyLength(keys),
  });

  const colorMap = {
    50: lightTones[5],
    100: lightTones[4],
    200: lightTones[3],
    300: lightTones[2],
    400: lightTones[1],
    500: color,
    600: darkTones[1],
    700: darkTones[2],
    800: darkTones[3],
    900: darkTones[4],
  };

  const colorSchema = {};
  for (const key of keys) colorSchema[key] = colorMap[key];

  return colorSchema;
}
