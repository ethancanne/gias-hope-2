import styles from './posts-list.module.scss';
import { getMarkdownData } from '../../../lib/getMarkdownData';

const PostsList = () => {
  const markdownData = getMarkdownData('./content/posts');

  return (
    <div className={styles.container}>
      {Object.keys(markdownData).map((slug) => (
        <div key={slug}>
          <h2>{markdownData[slug].data.title}</h2>
          <div>{markdownData[slug].content}</div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
