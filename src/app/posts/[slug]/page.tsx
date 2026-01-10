import PageWrapper from '@/layout/page-wrapper/page-wrapper.layout';
import PostContent from '@/views/posts/post-content/post-content.view';
import { getPostsData } from '@/lib/getData';

// Generate paths for the slugs at build time
export async function generateStaticParams() {
  const postsData = await getPostsData();

  return Object.keys(postsData).map((slug) => ({
    slug,
  }));
}

const PostPage = async ({ params }: Props) => {
  const { slug } = await params;

  const postsData = await getPostsData();

  const post = postsData[decodeURIComponent(slug)].data;
  
  if (!post) {
    return <PageWrapper><h1>Post not found</h1></PageWrapper>;
  }

  return (
    <PageWrapper>
      <PostContent post={post} />
    </PageWrapper>
  );
};

export default PostPage;
