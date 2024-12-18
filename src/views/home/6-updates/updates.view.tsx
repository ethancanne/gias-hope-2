import styles from './updates.module.scss';
import Image from 'next/image';
import Title from '@/components/title/title.component';

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
    <div className={styles.container}>
      <Title title={'Recent Updates'} subTitle={'Stay in the know'} />
      <div className={styles.postsContainer}>
        {posts.map((post) => {
          return (
            <div className={styles.post} key={post.id}>
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={300}
                className={styles.image}
              />

              <div className={styles.textContainer}>
                <p className={styles.category}>{post.category}</p>
                <p className={styles.title}>{post.title}</p>
                <p className={styles.date}>{post.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Updates;
