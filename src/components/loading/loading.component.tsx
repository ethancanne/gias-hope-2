import { AiOutlineLoading } from 'react-icons/ai';
import styles from './loading.module.scss';

type Props = {
  message?: string;
};

const Loading = (props: Props) => {
  return (
    <div className={styles.loading}>
      <AiOutlineLoading className={styles.loadingIcon} />

      {props.message && <p className={styles.message}>{props.message}</p>}
    </div>
  );
};

export default Loading;
