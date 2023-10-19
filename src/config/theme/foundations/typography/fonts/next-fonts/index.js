import * as googleFonts from './google-fonts';
import * as localFont from './local-fonts';
import { mappingNextFontFamily } from './utils/mapping-next-font-family';

const nextFonts = mappingNextFontFamily({ ...googleFonts, ...localFont });

export default nextFonts;
