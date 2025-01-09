import Image from 'next/image';
import styles from './post-preview.module.scss';

type Props = {
  post: any;
};

const PostPreview = (props: Props) => {
  return (
    <div className={styles.container} key={props.post.id}>
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
        <p className={styles.date}>{props.post.date}</p>
      </div>
    </div>
  );
};

export default PostPreview;
