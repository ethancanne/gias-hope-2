import styles from './button.module.scss';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  href: string;
  type: 'yellow' | 'green' | 'white' | 'ghost';
  large?: boolean;
  className?: string;
};
const Button = (props: Props) => {
  return (
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
  );
};

export default Button;
