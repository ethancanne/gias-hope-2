'use client'; // Error boundaries must be Client Components

import Button from '@/components/button/button.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import Title from '@/components/title/title.component';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '0.5rem',
        width: '100vw',
      }}
    >
      <Title center>Something went wrong!</Title>
      <Paragraph small center>
        {error.message}
      </Paragraph>
      <Button type="yellow" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
