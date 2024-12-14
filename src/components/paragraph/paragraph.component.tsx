import styles from './paragraph.module.scss';
type Props = {
  children?: React.ReactNode;
  className?: string;
};
const Paragraph = (props: Props) => {
  return (
    <p className={styles.container + ' ' + props.className}>{props.children}</p>
  );
};
export default Paragraph;
