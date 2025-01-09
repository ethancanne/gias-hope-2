'use client';
import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import AidOverview from '@/views/apply-for-a-grant/1-aid-overview/aid-overview.view';
import Application from '@/views/apply-for-a-grant/2-application/application.view';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Props = {};

const page = (props: Props) => {
  const searchParams = useSearchParams();

  const [showApplication, setShowApplication] = useState(false);

  const showApplicationParam = searchParams?.get('show-application');

  useEffect(() => {
    if (showApplicationParam === 'true') {
      setShowApplication(true);
    } else {
      setShowApplication(false);
    }
  }, [showApplicationParam]);

  return (
    <PageWrapper>
      <Intro
        header="apply for a grant"
        subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam."
        largeBackgroundImg={'/family-2.png'}
        smallBackgroundImg={'/family-small.png'}
        size="small"
      />

      {!showApplication ? <AidOverview /> : <Application />}
    </PageWrapper>
  );
};

export default page;
