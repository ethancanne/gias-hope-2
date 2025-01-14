import Button from '@/components/button/button.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import Title from '@/components/title/title.component';
import Link from 'next/link';

export default function NotFound() {
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
      <Title center>Page Not Found</Title>

      <Button type="yellow" href={'/'}>
        Return Home
      </Button>
    </div>
  );
}
