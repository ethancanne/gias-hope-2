import styles from './updates.module.scss';
import Image from 'next/image';
import Title from '@/components/title/title.component';
import PostPreview from '@/components/post-preview/post-preview.component';
import Button from '@/components/button/button.component';
import { getPostsData } from '@/lib/getData';

const Updates = () => {
  const postsData = getPostsData();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title title={'Recent Updates'} subTitle={'Stay in the know'} />
        <div className={styles.postsContainer}>
          {Object.keys(postsData)
            .slice(0, 4)
            .map((slug: any) => (
              <PostPreview
                key={slug}
                post={postsData[slug].data}
                postSlug={slug}
              />
            ))}
        </div>
        <div className={styles.seeAllButtonContainer}>
          <Button text={'See All Posts'} href={'/posts'} type={'ghost'} />
        </div>
      </div>
    </div>
  );
};
export default Updates;
