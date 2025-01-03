import styles from './title.module.scss';
type Props = {
  title?: string;
  subTitle?: string;
  uppercase?: boolean;
  center?: boolean;
  children?: React.ReactNode;
  small?: boolean;
  className?: string;
  black?: boolean;
};
const Title = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.subTitle && <p className={styles.subTitle}>{props.subTitle}</p>}
      <h1
        className={
          styles.title +
          ' ' +
          (props.uppercase && styles.uppercase) +
          ' ' +
          (props.center && styles.center) +
          ' ' +
          (props.small && styles.small) +
          ' ' +
          props.className
        }
      >
        {props.title || props.children}
      </h1>
    </div>
  );
};
export default Title;
