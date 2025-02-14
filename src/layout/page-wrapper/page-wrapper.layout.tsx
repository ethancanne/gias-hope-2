import { Suspense } from 'react';
import styles from './page-wrapper.module.scss';
import { AiOutlineLoading } from 'react-icons/ai';
import Loading from '@/components/loading/loading.component';
import { Metadata } from 'next';
import UnderConstruction from '@/components/under-construction/under-construction.component';

type Props = {
  children: React.ReactNode;
  waitingData?: any;
  pageInformation?: any;
  pageUnderConstruction?: any;
};

const PageWrapper = (props: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      {props.pageUnderConstruction ? <UnderConstruction /> : props.children}
    </Suspense>
  );
};

export default PageWrapper;
