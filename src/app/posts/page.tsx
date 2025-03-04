import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import SubPageIntro from '@/layout/sub-page-intro/intro.component';
import { getPagesData, getPostsData } from '@/lib/getData';
import PostsList from '@/views/posts/posts-lists/posts-list.view';
import React from 'react';

const PostsPage = async () => {
  const postsPageData = await getPagesData('posts-page');
  const postsData = await getPostsData();

  return (
    <PageWrapper>
      <SubPageIntro
        backgroundImg={postsPageData.pageInformation.desktopPageImage}
        title={postsPageData.pageInformation.title}
        description={postsPageData.pageInformation.description}
      />
      <PostsList postsData={postsData} />
    </PageWrapper>
  );
};

export default PostsPage;
