import styles from './updates.module.scss';
import Image from 'next/image';
import Title from '@/components/title/title.component';
import PostPreview from '@/components/post-preview/post-preview.component';
import Button from '@/components/button/button.component';
import { getPostsData } from '@/lib/getData';

type Props = {
  postsData: {
    [slug: string]: {
      id: number;
      title: string;
      image: string;
      date: string;
      category: string;
      content: string;
    };
  };
};
const Updates = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title title={'Recent Updates'} subTitle={'Stay in the know'} />
        <div className={styles.postsContainer}>
          {Object.keys(props.postsData)
            .slice(0, 4)
            .sort(
              (a: any, b: any) =>
                new Date((props.postsData as any)[b].data.date).getTime() -
                new Date((props.postsData as any)[a].data.date).getTime()
            )
            .map((slug: any) => (
              <PostPreview
                key={slug}
                post={(props.postsData as any)[slug].data}
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
