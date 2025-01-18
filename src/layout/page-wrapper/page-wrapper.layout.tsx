import { Suspense } from 'react';
import styles from './page-wrapper.module.scss';
import { AiOutlineLoading } from 'react-icons/ai';
import Loading from '@/components/loading/loading.component';
import Error from 'next/error';
import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  waitingData?: any;
  pageInformation?: any;
};

const PageWrapper = (props: Props) => {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
};

export default PageWrapper;
