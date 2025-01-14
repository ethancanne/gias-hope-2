import styles from './posts-list.module.scss';
import { getPostsData } from '@/lib/getData';
import PostPreview from '@/components/post-preview/post-preview.component';

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
  }[];
};
const PostsList = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {Object.keys(props.postsData)
          .sort(
            (a: any, b: any) =>
              new Date((props.postsData as any)[b].data.date).getTime() -
              new Date((props.postsData as any)[a].data.date).getTime()
          )
          .map((slug: any, index) => (
            <PostPreview
              post={props.postsData[slug].data}
              postSlug={slug}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default PostsList;
