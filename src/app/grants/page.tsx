'use client';
import { useState } from 'react';
import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import GrantList from '@/views/grants/grant-list/grant-list.view';
import PasswordProtection from '@/views/grants/password-protection/password-protection.view';
import SubPageIntro from '@/layout/sub-page-intro/intro.component';

type Props = {};

const Page = (props: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={handleAuthentication} />;
  }

  return (
    <PageWrapper>
      <SubPageIntro
        title="Grants"
        backgroundImg={'/apply-grant-background-image.jpg'}
        mobileBackgroundImg={'/apply-grant-background-image.jpg'}
        description="Here are all of the grants we have received."
      />
      <GrantList />
    </PageWrapper>
  );
};

export default Page;
