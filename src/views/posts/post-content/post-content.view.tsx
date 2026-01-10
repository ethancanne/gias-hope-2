import Image from 'next/image';
import styles from './post-content.module.scss';
import Markdown from 'react-markdown';
import { IoChevronBackOutline } from 'react-icons/io5';
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
};

const PostContent = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.titleContainer}>
            <Link href={'/posts'}>
              <IoChevronBackOutline className={styles.backButton} />
            </Link>

            <h1 className={styles.title}>{props.post.title}</h1>
          </div>
          <p className={styles.date}>
            {new Date(props.post.date).toString().slice(4, 15)}
          </p>
          <p className={styles.category}>{props.post.category}</p>
          <Image
            src={props.post.image}
            alt={props.post.title}
            className={styles.image}
            width={600}
            height={400}
          />
        </div>
        <Markdown className={styles.content}>{props.post.content}</Markdown>
      </div>
    </div>
  );
};

export default PostContent;
