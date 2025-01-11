import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import PostContent from '@/views/posts/post-content/post-content.view';
import React from 'react';
import Markdown from 'react-markdown';
import { getMarkdownData } from '../../../../lib/getMarkdownData';
import { GetStaticPaths } from 'next';

interface Props {
  params: { slug: string };
}

//
const PostPage = ({ params }: Props) => {
  const { slug } = params;

  const markdownData = getMarkdownData('./content/posts');

  return (
    <PageWrapper>
      <PostContent post={markdownData[slug].data} />
    </PageWrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const markdownData = getMarkdownData('./content/posts');
  const paths = Object.keys(markdownData);

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
