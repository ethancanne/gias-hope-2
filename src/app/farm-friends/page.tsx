import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import SubPageIntro from '@/layout/sub-page-intro/intro.component';
import { getPagesData } from '@/lib/getData';
import FarmFriendsIntro from '@/views/farm-friends/1-intro/intro.view';
import FarmFriendsStory from '@/views/farm-friends/2-story/story.view';
import React from 'react';

const FarmFriends = async () => {
  const farmFriendsPageData = (await getPagesData('farm-friends-page')) as any;
  return (
    <PageWrapper
    // pageUnderConstruction={
    //   farmFriendsPageData.pageInformation.isUnderConstruction
    // }
    >
      <SubPageIntro
        title={farmFriendsPageData.pageInformation.title}
        description={farmFriendsPageData.pageInformation.description}
        backgroundImg={farmFriendsPageData.pageInformation.desktopPageImage}
        mobileBackgroundImg={
          farmFriendsPageData.pageInformation.mobilePageImage
        }
      />

      <FarmFriendsIntro />
      <FarmFriendsStory storyBlocks={farmFriendsPageData.storyBlocks} />
    </PageWrapper>
  );
};

export default FarmFriends;
