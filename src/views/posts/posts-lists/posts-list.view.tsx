import styles from './posts-list.module.scss';
import { getPostsData } from '@/lib/getData';
import PostPreview from '@/components/post-preview/post-preview.component';

const PostsList = () => {
  const markdownData = getPostsData();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {Object.keys(markdownData).map((slug) => (
          <PostPreview post={markdownData[slug].data} postSlug={slug} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
