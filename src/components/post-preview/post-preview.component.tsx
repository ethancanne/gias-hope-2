import Image from 'next/image';
import styles from './post-preview.module.scss';
import Link from 'next/link';

type Props = {
  post: {
    id: number;
    title: string;
    image: string;
    date: string;
    category: string;
    content: string;
  };
  postSlug: string;
};

const PostPreview = (props: Props) => {
  return (
    <Link
      href={'/posts/' + props.postSlug}
      className={styles.container}
      key={props.post.id}
    >
      <Image
        src={props.post.image}
        alt={props.post.title}
        width={300}
        height={300}
        className={styles.image}
      />

      <div className={styles.textContainer}>
        <p className={styles.category}>{props.post.category}</p>
        <p className={styles.title}>{props.post.title}</p>
        <p className={styles.date}>
          {new Date(props.post.date).toDateString()}
        </p>
      </div>
    </Link>
  );
};

export default PostPreview;
