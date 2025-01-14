import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import PostContent from '@/views/posts/post-content/post-content.view';
import React from 'react';
import Markdown from 'react-markdown';
import { getPostsData } from '@/lib/getData';
import { GetStaticPaths } from 'next';

interface Props {
  params: { slug: string };
}

//
const PostPage = async ({ params }: Props) => {
  const { slug } = params;

  const postsData = await getPostsData();

  return (
    <PageWrapper>
      <PostContent post={postsData[slug].data} />
    </PageWrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const markdownData = getPostsData();
  const paths = Object.keys(markdownData);

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
