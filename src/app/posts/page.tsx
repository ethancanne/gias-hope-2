import Intro from '@/layout/intro/intro.component';
import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import PostsList from '@/views/posts/posts-lists/posts-list.view';
import React from 'react';

const PostsPage = () => {
  return (
    <PageWrapper>
      <Intro
        size={'small'}
        header={'Posts'}
        subText={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam.'
        }
      />
      <PostsList />
    </PageWrapper>
  );
};

export default PostsPage;
