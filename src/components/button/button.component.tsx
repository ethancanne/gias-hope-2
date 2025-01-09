import styles from './button.module.scss';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  href?: string;
  type: 'yellow' | 'green' | 'white' | 'ghost';
  large?: boolean;
  className?: string;
};
const Button = (props: Props) => {
  return props.href ? (
    <Link href={props.href}>
      <button
        className={
          styles.container +
          ' ' +
          styles[props.type] +
          ' ' +
          (props.large ? styles.large : '') +
          ' ' +
          props.className
        }
      >
        {props.children || props.text}
      </button>
    </Link>
  ) : (
    <button
      className={
        styles.container +
        ' ' +
        styles[props.type] +
        ' ' +
        (props.large ? styles.large : '') +
        ' ' +
        props.className
      }
      onClick={props.onClick}
    >
      {props.children || props.text}
    </button>
  );
};

export default Button;
