import styles from './textbox.module.scss';
type Props = {
  children?: React.ReactNode;
  className?: string;
  small?: boolean;
  placeholder?: string;
};
const TextField = (props: Props) => {
  return <input className={styles.container} placeholder={props.placeholder} />;
};
export default TextField;
