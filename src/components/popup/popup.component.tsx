import styles from './popup.module.scss';
import { IoClose } from 'react-icons/io5';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
  isOpen: boolean;
};

const Popup = (props: Props) => {
  return (
    <div className={styles.wrapper + ' ' + (props.isOpen ? styles.open : '')}>
      <div className={styles.container}>
        <div className={styles.closeButton} onClick={props.onClose}>
          <IoClose className={styles.closeIcon} />
        </div>

        <h1 className={styles.title}>{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
};

export default Popup;
