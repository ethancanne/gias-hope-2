import Link from 'next/link';
import styles from './vision-button.module.scss';
import {
  LuActivity,
  LuHandCoins,
  LuHeartHandshake,
  LuShieldPlus,
} from 'react-icons/lu';

import { BiWorld } from 'react-icons/bi';

import { PiFarmFill } from 'react-icons/pi';

interface Props {
  text: string;
  id: string;
  IconComponent: React.ComponentType<any>;
}

export const visionIconMapping: { [key: string]: React.ComponentType } = {
  LuHeartHandshake,
  BiWorld,
  LuShieldPlus,
  PiFarmFill,
};
const VisionButton = ({ text, IconComponent, id }: Props) => {
  return (
    <Link className={styles.container} href={'/what-we-do/#' + id}>
      <IconComponent className={styles.icon} />
      <h1 className={styles.text}>{text}</h1>
    </Link>
  );
};

export default VisionButton;
