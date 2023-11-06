import React from 'react';

import type { Preview } from '@storybook/react';
import { Inter } from 'next/font/google';
import theme from '../src/config/theme';

const inter = Inter({ subsets: ['latin'] });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: { theme, resetCss: true },
  },
  decorators: [
    (Story) => (
      <div className={inter.className}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
