import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import { getPagesData } from '@/lib/getData';
import React from 'react';

const FarmFriends = async () => {
  const farmFriendsPageData = (await getPagesData('farm-friends-page')) as any;
  return (
    <PageWrapper
      pageUnderConstruction={
        farmFriendsPageData.pageInformation.isUnderConstruction
      }
    >
      <Intro
        size="small"
        title={farmFriendsPageData.pageInformation.title}
        description={farmFriendsPageData.pageInformation.description}
      />
      <h1></h1>
    </PageWrapper>
  );
};

export default FarmFriends;
