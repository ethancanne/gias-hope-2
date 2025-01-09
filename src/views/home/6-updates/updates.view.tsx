import styles from './updates.module.scss';
import Image from 'next/image';
import Title from '@/components/title/title.component';
import PostPreview from '@/components/post-preview/post-preview.component';
import Button from '@/components/button/button.component';

const posts = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam.',
    image: '/family-small.png',
    date: 'May 1, 2023',
    category: 'News',
  },
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam.',
    image: '/family-small.png',
    date: 'May 1, 2023',
    category: 'News',
  },
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam.',
    image: '/family-small.png',
    date: 'May 1, 2023',
    category: 'News',
  },
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam.',
    image: '/family-small.png',
    date: 'May 1, 2023',
    category: 'News',
  },
];
const Updates = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title title={'Recent Updates'} subTitle={'Stay in the know'} />
        <div className={styles.postsContainer}>
          {posts.map((post) => {
            return <PostPreview key={post.id} post={post} />;
          })}
        </div>
        <div className={styles.seeAllButtonContainer}>
          <Button text={'See All Posts'} href={'/posts'} type={'ghost'} />
        </div>
      </div>
    </div>
  );
};
export default Updates;
