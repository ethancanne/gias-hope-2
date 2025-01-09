import Title from '@/components/title/title.component';
import styles from './vision-overview.module.scss';
import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';

import { LuHeartHandshake } from 'react-icons/lu';
import { LuHandCoins } from 'react-icons/lu';
import { LuShieldPlus } from 'react-icons/lu';
import { LuActivity } from 'react-icons/lu';
import Link from 'next/link';

type Props = {};

const VisionOverview = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Title center small>
          The vision of GIA’S Hope is a{' '}
          <span className={styles.bold}>4-part global initiative</span>
        </Title>
        <Paragraph center>
          Our mission is to witness goodness arising by shining God's light, and
          hope for the most broken, hurting, poor, orphaned and vulnerable ones
          around the world.
        </Paragraph>
      </div>

      <div className={styles.visionContainer}>
        <Link className={styles.visionItem} href={'#orphan-care'}>
          <LuActivity className={styles.icon} />
          <h1 className={styles.text}>Orphan Care</h1>
        </Link>
        <Link className={styles.visionItem} href={'#orphan-prevention'}>
          <LuShieldPlus className={styles.icon} />
          <h1 className={styles.text}>Orphan Prevention</h1>
        </Link>
        <Link className={styles.visionItem} href={'#adoption-aid'}>
          <LuHandCoins className={styles.icon} />
          <h1 className={styles.text}>Adoption Aid</h1>
        </Link>
        <Link className={styles.visionItem} href={'#care-ministry'}>
          <LuHeartHandshake className={styles.icon} />
          <h1 className={styles.text}>Care Ministry</h1>
        </Link>
      </div>
    </div>
  );
};
export default VisionOverview;
