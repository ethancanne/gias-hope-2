import styles from './footer.module.scss';
import Image from 'next/image';
import * as NextImage from 'next/image';

type Props = {};
const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <Image src={'/full-logo.png'} alt={'logo'} width={170} height={170} />
    </div>
  );
};
export default Footer;
