import tinycolor from 'tinycolor2';

export function getColorTone(color, percent = 5) {
  const t = tinycolor(color);
  // hsl(hue, saturation, lightness)
  const hsl = t.toHsl();
  // 색조

  const colorH = hsl.h;
  // 채도 (0이면 회색, 100이면 원색)
  const colorS = hsl.s * 100;
  // 밝기 (0이면 검정색 100이면 흰색)
  const colorL = hsl.l * 100;

  const lightTones = [];
  const darkTones = [];

  for (let i = 0; i < 100; i = i + percent) {
    // 기존 밝기에서 (percent * n)% 만큼 올린값
    const lighten = colorL + i;
    const lightColor = tinycolor(
      'hsl(' + colorH + ', ' + colorS + '%, ' + lighten + '%)',
    );
    const lightHex = lightColor.toHexString();

    // 기존 밝기에서 (percent * n)%만큼 내린 값
    const darken = colorL - i;
    const darkColor = tinycolor(
      'hsl(' + colorH + ', ' + colorS + '%, ' + darken + '%)',
    );
    const darkHex = darkColor.toHexString();

    if (lighten <= 100) lightTones.push(lightHex);
    if (darken >= 0) darkTones.push(darkHex);
  }

  return { lightTones, darkTones };
}
