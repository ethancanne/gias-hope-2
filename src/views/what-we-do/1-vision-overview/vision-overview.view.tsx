import Title from '@/components/title/title.component';
import styles from './vision-overview.module.scss';
import Paragraph from '@/components/paragraph/paragraph.component';
import Image from 'next/image';

import { LuHeartHandshake } from 'react-icons/lu';
import { LuHandCoins } from 'react-icons/lu';
import { LuShieldPlus } from 'react-icons/lu';
import { LuActivity } from 'react-icons/lu';
import Link from 'next/link';

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

const iconMapping: { [key: string]: React.ComponentType } = {
  LuHeartHandshake,
  LuHandCoins,
  LuShieldPlus,
  LuActivity,
};

const VisionOverview = (props: Props) => {
  console.log('THIS IS HOME!', props.visionsData);

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
          const IconComponent = iconMapping[vision.icon] as any;
          return (
            <Link
              key={key}
              className={styles.visionItem}
              href={'#' + vision.id}
            >
              {IconComponent && <IconComponent className={styles.icon} />}
              <h1 className={styles.text}>{vision.title}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default VisionOverview;
