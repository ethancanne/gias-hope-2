import Title from '@/components/title/title.component';
import styles from './vision-overview.module.scss';
import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';

type Props = {};

const VisionOverview = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title center small>
        The vision of GIA’S Hope is a{' '}
        <span className={styles.bold}>4-part global initiative</span>
      </Title>
      <Paragraph center>
        Our mission is plant God’s seed of love so that abundant life can grow
        and hope can bloom.
      </Paragraph>

      <div className={styles.visionContainer}>
        <div className={styles.visionItem}>Orphan Care</div>
        <div className={styles.visionItem}>Orphan Prevention</div>
        <div className={styles.visionItem}>Adoption Aid</div>
        <div className={styles.visionItem}>Care Ministry</div>
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
