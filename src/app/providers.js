'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/config/react-query-client';

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider resetCSS>{children}</ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}

export default Providers;
