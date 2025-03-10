'use client';
import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import AidOverview from '@/views/apply-for-a-grant/1-aid-overview/aid-overview.view';
import Application from '@/views/apply-for-a-grant/2-application/application.view';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

import { getPagesData } from '@/lib/getData';
import Loading from '@/components/loading/loading.component';
import SubPageIntro from '@/layout/sub-page-intro/intro.component';

type Props = {};

const ApplyForAGrant = (props: Props) => {
  const searchParams = useSearchParams();

  const [showApplication, setShowApplication] = useState(false);

  const showApplicationParam = searchParams?.get('show-application');

  const [applyForAGrantPageData, setApplyForAGrantPageData]: any = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPagesData('apply-for-a-grant-page');
      setApplyForAGrantPageData(data);
      // console.log('Data fetched:', data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (showApplicationParam === 'true') {
      setShowApplication(true);
    } else {
      setShowApplication(false);
    }
  }, [showApplicationParam]);

  if (!applyForAGrantPageData) {
    return <Loading />;
  }

  return (
    <PageWrapper>
      <SubPageIntro
        backgroundImg={applyForAGrantPageData.pageInformation.desktopPageImage}
        mobileBackgroundImg={
          applyForAGrantPageData.pageInformation.mobilePageImage
        }
        title={applyForAGrantPageData.pageInformation.title}
        description={applyForAGrantPageData.pageInformation.description}
      />

      {!showApplication ? (
        <AidOverview grantPageData={applyForAGrantPageData} />
      ) : (
        <Application grantFormFields={applyForAGrantPageData.grantFormFields} />
      )}
    </PageWrapper>
  );
};

const Page = (props: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      <ApplyForAGrant />
    </Suspense>
  );
};

export default Page;
