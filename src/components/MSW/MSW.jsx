'use client';

import React, { useEffect, useState } from 'react';

const isDev = process.env.NODE_ENV === 'development';

const MSW = ({ children }) => {
  const [ready, setReady] = useState(false);

  const init = async () => {
    if (isDev) {
      const initMock = await import('@/mocks/index');
      await initMock.initMSW();
      setReady(() => true);
    }
  };

  useEffect(() => {
    if (ready) return;

    init();
  }, [ready]);

  if (!isDev) return null;
  return <>{children}</>;
};

export default MSW;
