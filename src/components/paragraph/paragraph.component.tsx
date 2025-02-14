import styles from './paragraph.module.scss';
type Props = {
  children?: React.ReactNode;
  className?: string;
  small?: boolean;
  center?: boolean;
  full?: boolean;
  id?: string;
};
const Paragraph = (props: Props) => {
  return (
    <div
      id={props.id}
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
    </div>
  );
};
export default Paragraph;
