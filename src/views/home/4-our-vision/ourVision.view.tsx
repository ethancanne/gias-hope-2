import styles from './ourVision.module.scss';
import Title from '@/components/title/title.component';
import Paragraph from '@/components/paragraph/paragraph.component';
type Props = {};
const OurVision = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.visionContainer}>
        <div className={styles.visionGroup}>
          <div className={styles.visionItem}>No way</div>
          <div className={styles.visionItem}>NO</div>
        </div>
        <div className={styles.visionGroup}>
          <div className={styles.visionItem}> WOW!</div>
          <div className={styles.visionItem}> WOW!</div>
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
