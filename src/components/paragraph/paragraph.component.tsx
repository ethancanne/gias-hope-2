import styles from './paragraph.module.scss';
type Props = {
  children?: React.ReactNode;
  className?: string;
  small?: boolean;
  center?: boolean;
  full?: boolean;
};
const Paragraph = (props: Props) => {
  return (
    <p
      className={
        styles.container +
        ' ' +
        props.className +
        ' ' +
        (props.small && styles.small) +
        ' ' +
        (props.center && styles.center) +
        ' ' +
        (props.full && styles.full)
      }
    >
      {props.children}
    </p>
  );
};
export default Paragraph;
