import Title from '@/components/title/title.component';
import styles from './vision-overview.module.scss';
import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';

import Link from 'next/link';
import VisionButton from '@/components/vision-button/vision-button.component';
import { visionIconMapping } from '@/components/vision-button/vision-button.component';

type Props = {
  visionsData: {
    id: string;
    title: string;
    description: string;
    backgroundImage: string;
    backgroundColor: string;
    icon: any;
    images: {
      src: string;
      alt: string;
    }[];
  }[];
};

const VisionOverview = (props: Props) => {
  // console.log('THIS IS HOME!', props.visionsData);

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
        {props.visionsData.map((vision: any, key: number) => {
          const IconComponent = visionIconMapping[vision.icon] as any;
          return (
            <VisionButton
              IconComponent={IconComponent}
              text={vision.title}
              id={vision.id}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};
export default VisionOverview;
