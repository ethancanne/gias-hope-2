import styles from './title.module.scss';
type Props = {
  title: string;
  subTitle?: string;
  uppercase?: boolean;
};
const Title = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.subTitle && <p className={styles.subTitle}>{props.subTitle}</p>}
      <h1
        className={styles.title + ' ' + (props.uppercase && styles.uppercase)}
      >
        {props.title}
      </h1>
    </div>
  );
};
export default Title;
