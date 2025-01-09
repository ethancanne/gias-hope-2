import styles from './ourVision.module.scss';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';
import {
  LuActivity,
  LuHandCoins,
  LuHeartHandshake,
  LuShieldPlus,
} from 'react-icons/lu';
import Link from 'next/link';
type Props = {};
const OurVision = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.visionContainer}>
        <div className={styles.visionGroup}>
          <Link className={styles.visionItem} href={'/what-we-do#orphan-care'}>
            <LuActivity className={styles.icon} />
            <h1 className={styles.text}>Orphan Care</h1>
          </Link>
          <Link
            className={styles.visionItem}
            href={'/what-we-do#orphan-prevention'}
          >
            <LuShieldPlus className={styles.icon} />
            <h1 className={styles.text}>Orphan Prevention</h1>
          </Link>
        </div>
        <div className={styles.visionGroup}>
          <Link className={styles.visionItem} href={'/what-we-do#adoption-aid'}>
            <LuHandCoins className={styles.icon} />
            <h1 className={styles.text}>Adoption Aid</h1>
          </Link>
          <Link
            className={styles.visionItem}
            href={'/what-we-do#care-ministry'}
          >
            <LuHeartHandshake className={styles.icon} />
            <h1 className={styles.text}>Care Ministry</h1>
          </Link>
        </div>
      </div>
      <div className={styles.textContainer}>
        <Title title={'Our Vision'} subTitle={'Hope for the World'} />
        <Paragraph>
          The vision of GIA'S Hope is a 4-part global initiative to plant God's
          seed of love. Our mission is to grow abundant life and bloom radiant
          hope through the four branches of our foundation for the most hurting
          and broken.
        </Paragraph>
      </div>
    </div>
  );
};
export default OurVision;
