import styles from './under-construction.module.scss';
import { IoConstructSharp } from 'react-icons/io5';

type Props = {};

const UnderConstruction = (props: Props) => {
  return (
    <div className={styles.container}>
      <IoConstructSharp className={styles.icon} />
      <h1 className={styles.title}>Page Under Construction</h1>
      <p>Please check back later</p>
    </div>
  );
};

export default UnderConstruction;
