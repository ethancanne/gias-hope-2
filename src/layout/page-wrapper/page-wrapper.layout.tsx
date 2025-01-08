import styles from './page-wrapper.module.scss';

type Props = {
  children: React.ReactNode;
};

const PageWrapper = (props: Props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default PageWrapper;
