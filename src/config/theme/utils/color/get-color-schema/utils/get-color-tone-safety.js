import { getColorTone } from './get-color-tone';

export function getColorToneSafety({
  color, //
  percent = 5,
  safetyLength = { light: 6, dark: 5 },
}) {
  const { light: lightMinLength, dark: darkMinLength } = safetyLength;

  const safetyPercent = Math.max(1, percent);
  const colorTone = getColorTone(color, safetyPercent);

  const isInValidDark = colorTone.darkTones.length < darkMinLength;
  const isInValidLight = colorTone.lightTones.length < lightMinLength;

  const isInValidLength = isInValidDark || isInValidLight;
  const isNeverValid = percent <= 0;

  if (isNeverValid)
    throw Error(`Please change the color(${color}).
  You can never get the right length(light: ${safetyLength.light}, dark: ${safetyLength.dark}).
   - color: ${color}
   - target length: light: ${safetyLength.light}, dark: ${safetyLength.dark}
   - current length: light: ${colorTone.lightTones.length}, dark: ${colorTone.darkTones.length}
  `);

  if (isInValidLength) {
    const nextPercentage = percent - 2;
    console.warn(`The correct length cannot be obtained from this color(${color}).
    Get the value again in the next percentage(${percent}% => ${nextPercentage}%).`);
    return getColorToneSafety({ color, percent: nextPercentage });
  }

  return colorTone;
}
