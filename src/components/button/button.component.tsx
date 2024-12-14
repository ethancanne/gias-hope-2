import styles from './button.module.scss';
import Link from 'next/link';

type Props = {
  text: string;
  onClick?: () => void;
  href: string;
  type: 'yellow' | 'green' | 'white';
  large?: boolean;
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
          (props.large ? styles.large : '')
        }
      >
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
