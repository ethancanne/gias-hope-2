import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import PostContent from '@/views/posts/post-content/post-content.view';
import React from 'react';
import { getPostsData } from '@/lib/getData';

// Generate paths for the slugs at build time
export async function generateStaticParams() {
  // Fetch the data
  const postsData = await getPostsData();

  const paths = Object.keys(postsData).map((slug) => ({
    params: { slug },
  }));

  return paths;
}

const PostPage = async ({ params }: any) => {
  const { slug } = params;

  const postsData = await getPostsData();

  const post = postsData[slug]?.data;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <PageWrapper>
      <PostContent post={post} />
    </PageWrapper>
  );
};

export default PostPage;
