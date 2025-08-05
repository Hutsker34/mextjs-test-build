// app/second/page.js
'use client';

import { useEffect, useState } from 'react';

export default function SecondPage() {
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '1.5rem',
      textAlign: 'center'
    }}>
      {clientReady
        ? 'вторая страница, отрисована CSR'
        : 'Loading...'}
    </div>
  );
}
