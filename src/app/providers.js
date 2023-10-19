'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/config/react-query-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import theme from '@/config/theme';
import fonts from '@/config/theme/foundations/typography/fonts';

const coveredTheme = {
  ...theme,
  fonts,
};

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider resetCSS theme={coveredTheme}>
          {children}
        </ChakraProvider>
      </CacheProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
