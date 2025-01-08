import Title from '@/components/title/title.component';
import styles from './vision-overview.module.scss';
import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';

import { LuHeartHandshake } from 'react-icons/lu';
import { LuHandCoins } from 'react-icons/lu';
import { LuShieldPlus } from 'react-icons/lu';
import { LuActivity } from 'react-icons/lu';

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
        <div className={styles.visionItem}>
          <LuActivity className={styles.icon} />
          <h1 className={styles.text}>Orphan Care</h1>
        </div>
        <div className={styles.visionItem}>
          <LuShieldPlus className={styles.icon} />
          <h1 className={styles.text}>Orphan Prevention</h1>
        </div>
        <div className={styles.visionItem}>
          <LuHandCoins className={styles.icon} />
          <h1 className={styles.text}>Adoption Aid</h1>
        </div>
        <div className={styles.visionItem}>
          <LuHeartHandshake className={styles.icon} />
          <h1 className={styles.text}>Care Ministry</h1>
        </div>
      </div>

      <Image
        className={styles.wave}
        src={'/wave-2.svg'}
        width={1920}
        height={1080}
        alt={'wave'}
        layout="responsive"
        objectFit="cover"
      />
    </div>
  );
};
export default VisionOverview;
